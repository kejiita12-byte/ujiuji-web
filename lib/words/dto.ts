import type { WordFragment } from "@prisma/client";

export type WordFragmentDto = {
  id: string;
  text: string;
  createdAt: string;
  source: "user" | "seed";
  status: "visible" | "hidden" | "rejected";
};

export function toWordFragmentDto(fragment: WordFragment): WordFragmentDto {
  return {
    id: fragment.id,
    text: fragment.text,
    createdAt: fragment.createdAt.toISOString(),
    source: fragment.source,
    status: fragment.status
  };
}