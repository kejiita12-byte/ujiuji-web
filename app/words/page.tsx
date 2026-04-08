import type { Metadata } from "next";
import { WordsClient } from "./WordsClient";

export const metadata: Metadata = {
  title: "気持ちを、少しだけ言葉にする",
  description:
    "まだまとまっていない気持ちを、ひとことだけ置いてみるためのページです。"
};

export default function WordsPage() {
  return <WordsClient />;
}