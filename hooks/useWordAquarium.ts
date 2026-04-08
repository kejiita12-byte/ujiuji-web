"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchWordsPool, postWord } from "@/lib/words/api";
import { WORD_AQUARIUM_VISIBLE_COUNT } from "@/lib/words/constants";
import type {
  AquariumVisibleItem,
  CapsuleLayout,
  WordFragment
} from "@/lib/words/types";

const CONTAINER_WIDTH = 720;
const CONTAINER_HEIGHT = 360;

const SIDE_PADDING = 12;
const TOP_PADDING = 12;
const BOTTOM_PADDING = 12;
const WRAP_MARGIN = 28;

const MAX_VISIBLE = WORD_AQUARIUM_VISIBLE_COUNT;

const NORMAL_LIFETIME_MIN = 10000;
const NORMAL_LIFETIME_MAX = 22000;
const USER_LIFETIME_MIN = 14000;
const USER_LIFETIME_MAX = 26000;

const USER_APPEAR_MS = 760;
const NORMAL_APPEAR_MS = 420;
const FADE_OUT_PORTION = 0.18;

type BubbleWord = {
  id: string;
  text: string;
  xPx: number;
  yPx: number;
  vx: number;
  vy: number;
  widthPx: number;
  heightPx: number;
  bornAt: number;
  lifetimeMs: number;
  rotateBase: number;
  isUserCreated: boolean;
  appearDurationMs: number;
  createdAt?: string;
};

function createFragmentId(text: string) {
  return `${text}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function clamp(min: number, value: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function easeOutBack(t: number) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function estimateCapsuleWidthPx(text: string) {
  const length = [...text].length;

  if (length <= 3) return 84;
  if (length <= 5) return 100;
  if (length <= 7) return 118;
  if (length <= 9) return 134;
  return 146;
}

function pickLifetimeMs(isUserCreated: boolean) {
  return isUserCreated
    ? randomBetween(USER_LIFETIME_MIN, USER_LIFETIME_MAX)
    : randomBetween(NORMAL_LIFETIME_MIN, NORMAL_LIFETIME_MAX);
}

function createInitialVelocity(isUserCreated: boolean) {
  const speed = isUserCreated
    ? randomBetween(42, 74)
    : randomBetween(34, 62);

  const angle = randomBetween(0, Math.PI * 2);

  return {
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed
  };
}

function createBubbleWord(
  fragment: WordFragment,
  now: number,
  isUserCreated: boolean
): BubbleWord {
  const widthPx = estimateCapsuleWidthPx(fragment.text);
  const heightPx = 30;

  const minX = SIDE_PADDING;
  const maxX = CONTAINER_WIDTH - SIDE_PADDING - widthPx;
  const minY = TOP_PADDING;
  const maxY = CONTAINER_HEIGHT - BOTTOM_PADDING - heightPx;

  const baseX = isUserCreated
    ? CONTAINER_WIDTH / 2 - widthPx / 2 + randomBetween(-16, 16)
    : randomBetween(minX, maxX);

  const baseY = isUserCreated
    ? CONTAINER_HEIGHT * 0.56 + randomBetween(-18, 12)
    : randomBetween(minY, maxY);

  const { vx, vy } = createInitialVelocity(isUserCreated);

  return {
    id: fragment.id,
    text: fragment.text,
    xPx: clamp(minX, baseX, maxX),
    yPx: clamp(minY, baseY, maxY),
    vx,
    vy,
    widthPx,
    heightPx,
    bornAt: now,
    lifetimeMs: pickLifetimeMs(isUserCreated),
    rotateBase: randomBetween(-2.4, 2.4),
    isUserCreated,
    appearDurationMs: isUserCreated ? USER_APPEAR_MS : NORMAL_APPEAR_MS,
    createdAt: fragment.createdAt
  };
}

function pickReplacementFragment(pool: WordFragment[], visibleBubbles: BubbleWord[]) {
  const visibleTexts = new Set(visibleBubbles.map((bubble) => bubble.text));
  const candidates = pool.filter((item) => !visibleTexts.has(item.text));

  if (candidates.length > 0) {
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  if (pool.length === 0) {
    return null;
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

function wrapBubblePosition(bubble: BubbleWord): BubbleWord {
  const minX = -WRAP_MARGIN;
  const maxX = CONTAINER_WIDTH + WRAP_MARGIN;
  const minY = -WRAP_MARGIN;
  const maxY = CONTAINER_HEIGHT + WRAP_MARGIN;

  let xPx = bubble.xPx;
  let yPx = bubble.yPx;
  let vx = bubble.vx;
  let vy = bubble.vy;
  let wrapped = false;

  if (xPx + bubble.widthPx < minX) {
    xPx = CONTAINER_WIDTH + WRAP_MARGIN - bubble.widthPx;
    yPx = clamp(
      TOP_PADDING,
      yPx + randomBetween(-24, 24),
      CONTAINER_HEIGHT - BOTTOM_PADDING - bubble.heightPx
    );
    wrapped = true;
  } else if (xPx > maxX) {
    xPx = -WRAP_MARGIN;
    yPx = clamp(
      TOP_PADDING,
      yPx + randomBetween(-24, 24),
      CONTAINER_HEIGHT - BOTTOM_PADDING - bubble.heightPx
    );
    wrapped = true;
  }

  if (yPx + bubble.heightPx < minY) {
    yPx = CONTAINER_HEIGHT + WRAP_MARGIN - bubble.heightPx;
    xPx = clamp(
      SIDE_PADDING,
      xPx + randomBetween(-24, 24),
      CONTAINER_WIDTH - SIDE_PADDING - bubble.widthPx
    );
    wrapped = true;
  } else if (yPx > maxY) {
    yPx = -WRAP_MARGIN;
    xPx = clamp(
      SIDE_PADDING,
      xPx + randomBetween(-24, 24),
      CONTAINER_WIDTH - SIDE_PADDING - bubble.widthPx
    );
    wrapped = true;
  }

  if (wrapped) {
    vx *= randomBetween(0.96, 1.04);
    vy *= randomBetween(0.96, 1.04);
  }

  return {
    ...bubble,
    xPx,
    yPx,
    vx,
    vy
  };
}

function resolveBubbleCollisions(bubbles: BubbleWord[]) {
  const next = bubbles.map((bubble) => ({ ...bubble }));

  for (let i = 0; i < next.length; i += 1) {
    for (let j = i + 1; j < next.length; j += 1) {
      const a = next[i];
      const b = next[j];

      const ax1 = a.xPx;
      const ax2 = a.xPx + a.widthPx;
      const ay1 = a.yPx;
      const ay2 = a.yPx + a.heightPx;

      const bx1 = b.xPx;
      const bx2 = b.xPx + b.widthPx;
      const by1 = b.yPx;
      const by2 = b.yPx + b.heightPx;

      const overlapX = Math.min(ax2, bx2) - Math.max(ax1, bx1);
      const overlapY = Math.min(ay2, by2) - Math.max(ay1, by1);

      if (overlapX <= 0 || overlapY <= 0) {
        continue;
      }

      const aCenterX = a.xPx + a.widthPx / 2;
      const aCenterY = a.yPx + a.heightPx / 2;
      const bCenterX = b.xPx + b.widthPx / 2;
      const bCenterY = b.yPx + b.heightPx / 2;

      const dx = bCenterX - aCenterX;
      const dy = bCenterY - aCenterY;

      if (overlapX < overlapY) {
        const direction = dx === 0 ? (Math.random() < 0.5 ? -1 : 1) : Math.sign(dx);
        const separation = overlapX / 2 + 2.5;

        a.xPx -= direction * separation;
        b.xPx += direction * separation;

        const minPush = 22;
        a.vx = -direction * Math.max(minPush, Math.abs(a.vx) * 0.92);
        b.vx = direction * Math.max(minPush, Math.abs(b.vx) * 0.92);

        a.vy += randomBetween(-4, 4);
        b.vy += randomBetween(-4, 4);
      } else {
        const direction = dy === 0 ? (Math.random() < 0.5 ? -1 : 1) : Math.sign(dy);
        const separation = overlapY / 2 + 2;

        a.yPx -= direction * separation;
        b.yPx += direction * separation;

        const minPush = 16;
        a.vy = -direction * Math.max(minPush, Math.abs(a.vy) * 0.92);
        b.vy = direction * Math.max(minPush, Math.abs(b.vy) * 0.92);

        a.vx += randomBetween(-3, 3);
        b.vx += randomBetween(-3, 3);
      }
    }
  }

  return next;
}

function updateBubbleMotion(bubble: BubbleWord, deltaSec: number): BubbleWord {
  const xPx = bubble.xPx + bubble.vx * deltaSec;
  const yPx = bubble.yPx + bubble.vy * deltaSec;

  return {
    ...bubble,
    xPx,
    yPx,
    vx: bubble.vx * 0.9994,
    vy: bubble.vy * 0.9994
  };
}

function buildLayoutFromBubble(bubble: BubbleWord, now: number, index: number): CapsuleLayout {
  const age = now - bubble.bornAt;
  const appearProgress = clamp(0, age / bubble.appearDurationMs, 1);
  const lifeProgress = clamp(0, age / bubble.lifetimeMs, 1);

  const fadeStart = 1 - FADE_OUT_PORTION;
  const fadeProgress =
    lifeProgress <= fadeStart
      ? 0
      : (lifeProgress - fadeStart) / FADE_OUT_PORTION;

  const appearOpacity = bubble.isUserCreated
    ? 0.22 + easeOutCubic(appearProgress) * 0.78
    : 0.2 + easeOutCubic(appearProgress) * 0.62;

  const fadeOpacity = 1 - fadeProgress * 0.9;
  const opacity = clamp(0, appearOpacity * fadeOpacity, 1);

  const scale = bubble.isUserCreated
    ? clamp(
        0.72,
        0.72 + easeOutBack(appearProgress) * 0.34 - fadeProgress * 0.08,
        1.08
      )
    : clamp(
        0.9,
        0.9 + easeOutCubic(appearProgress) * 0.12 - fadeProgress * 0.08,
        1.02
      );

  return {
    id: bubble.id,
    xPx: bubble.xPx,
    yPx: bubble.yPx,
    widthPx: bubble.widthPx,
    heightPx: bubble.heightPx,
    rotate: bubble.rotateBase,
    opacity,
    scale,
    zIndex: bubble.isUserCreated ? 180 : 40 + index
  };
}

function toVisibleItems(bubbles: BubbleWord[], now: number): AquariumVisibleItem[] {
  return bubbles.map((bubble, index) => ({
    fragment: {
      id: bubble.id,
      text: bubble.text,
      createdAt: bubble.createdAt,
      isOptimistic:
        bubble.isUserCreated && now - bubble.bornAt < bubble.appearDurationMs,
      isNewArrival: now - bubble.bornAt < bubble.appearDurationMs
    },
    layout: buildLayoutFromBubble(bubble, now, index)
  }));
}

function toWordFragment(item: {
  id: string;
  text: string;
  createdAt: string;
}): WordFragment {
  return {
    id: item.id,
    text: item.text,
    createdAt: item.createdAt
  };
}

function shuffleArray<T>(items: T[]) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function useWordAquarium() {
  const bubblesRef = useRef<BubbleWord[]>([]);
  const poolRef = useRef<WordFragment[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  const [pool, setPool] = useState<WordFragment[]>([]);
  const [visibleItems, setVisibleItems] = useState<AquariumVisibleItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    poolRef.current = pool;
  }, [pool]);

  useEffect(() => {
    let cancelled = false;

    async function loadInitialPool() {
      try {
        const items = await fetchWordsPool(60);
        if (cancelled) return;

        const fragments = items.map(toWordFragment);
        const now = performance.now();

        const initialBubbles = shuffleArray(fragments)
          .slice(0, MAX_VISIBLE)
          .map((fragment) => createBubbleWord(fragment, now, false));

        poolRef.current = fragments;
        bubblesRef.current = initialBubbles;
        lastTickRef.current = now;

        setPool(fragments);
        setVisibleItems(toVisibleItems(initialBubbles, now));
      } catch (error) {
        console.error("Failed to load words pool:", error);
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadInitialPool();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const tick = (now: number) => {
      const last = lastTickRef.current || now;
      const deltaSec = Math.min((now - last) / 1000, 0.04);
      lastTickRef.current = now;

      let nextBubbles = bubblesRef.current.map((bubble) =>
        updateBubbleMotion(bubble, deltaSec)
      );

      nextBubbles = resolveBubbleCollisions(nextBubbles);
      nextBubbles = nextBubbles.map(wrapBubblePosition);

      const survivors = nextBubbles.filter(
        (bubble) => now - bubble.bornAt < bubble.lifetimeMs
      );

      const nextPool = poolRef.current;
      const replenished = [...survivors];

      while (replenished.length < MAX_VISIBLE && nextPool.length > 0) {
        const fragment = pickReplacementFragment(nextPool, replenished);
        if (!fragment) break;

        replenished.push(createBubbleWord(fragment, now, false));
      }

      bubblesRef.current = replenished;
      setVisibleItems(toVisibleItems(replenished, now));
      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isLoading]);

  const shuffle = useCallback(async () => {
    try {
      const items = await fetchWordsPool(60);
      const fragments = items.map(toWordFragment);
      const now = performance.now();

      const nextBubbles = shuffleArray(fragments)
        .slice(0, MAX_VISIBLE)
        .map((fragment) => createBubbleWord(fragment, now, false));

      poolRef.current = fragments;
      bubblesRef.current = nextBubbles;
      lastTickRef.current = now;

      setPool(fragments);
      setVisibleItems(toVisibleItems(nextBubbles, now));
    } catch (error) {
      console.error("Failed to refresh words pool:", error);
    }
  }, []);

  const insertFragment = useCallback(async (text: string) => {
    const saved = await postWord({
      text,
      locale: typeof navigator !== "undefined" ? navigator.language : "ja-JP"
    });

    const now = performance.now();

    const newFragment: WordFragment = {
      id: saved.id || createFragmentId(saved.text),
      text: saved.text,
      createdAt: saved.createdAt,
      isOptimistic: true,
      isNewArrival: true
    };

    setPool((prev) => {
      const next = [newFragment, ...prev.filter((item) => item.text !== text)];
      poolRef.current = next;
      return next;
    });

    const withoutSameText = bubblesRef.current.filter((bubble) => bubble.text !== text);
    const trimmed =
      withoutSameText.length >= MAX_VISIBLE
        ? withoutSameText.slice(0, MAX_VISIBLE - 1)
        : withoutSameText;

    const newBubble = createBubbleWord(newFragment, now, true);
    const nextBubbles = [newBubble, ...trimmed];

    bubblesRef.current = nextBubbles;
    lastTickRef.current = now;
    setVisibleItems(toVisibleItems(nextBubbles, now));
  }, []);

  return {
    visibleItems,
    shuffle,
    insertFragment,
    isLoading
  };
}