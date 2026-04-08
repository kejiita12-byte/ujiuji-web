export type WordFragment = {
  id: string;
  text: string;
  selectedWord?: string | null;
  createdAt?: string;
  isOptimistic?: boolean;
  isNewArrival?: boolean;
};

export type CapsuleLayout = {
  id: string;
  xPx: number;
  yPx: number;
  widthPx: number;
  heightPx: number;
  rotate: number;
  opacity: number;
  scale: number;
  zIndex: number;
};

export type AquariumVisibleItem = {
  fragment: WordFragment;
  layout: CapsuleLayout;
};