import type { Metadata } from "next";
import { WordsClient } from "./WordsClient";

export const metadata: Metadata = {
  title: "気持ちを10文字で置く",
  description:
    "まだまとまっていない気持ちを、10文字以内のひとこととして静かに置いてみるためのページです。"
};

export default function WordsPage() {
  return <WordsClient />;
}