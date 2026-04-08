import { createHash, randomUUID } from "crypto";
import { cookies, headers } from "next/headers";

const WORDS_SESSION_COOKIE_NAME = "ujiuji_words_session";

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function getClientIpFromHeaders(headerStore: Headers) {
  const forwardedFor = headerStore.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = headerStore.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

export async function getOrCreateWordsSessionId() {
  const cookieStore = await cookies();
  const existing = cookieStore.get(WORDS_SESSION_COOKIE_NAME)?.value;

  if (existing) {
    return existing;
  }

  const sessionId = randomUUID();

  cookieStore.set(WORDS_SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });

  return sessionId;
}

export async function getWordsRequestContext() {
  const headerStore = await headers();
  const sessionId = await getOrCreateWordsSessionId();
  const ip = getClientIpFromHeaders(headerStore);

  return {
    sessionId,
    sessionHash: sha256(sessionId),
    ipHash: sha256(ip)
  };
}