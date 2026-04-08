export type WordsApiItem = {
  id: string;
  text: string;
  createdAt: string;
  source: "user" | "seed";
  status: "visible" | "hidden" | "rejected";
};

type GetWordsPoolResponse = {
  ok: true;
  items: WordsApiItem[];
};

type PostWordSuccessResponse = {
  ok: true;
  item: WordsApiItem;
};

type ApiErrorResponse = {
  ok: false;
  error: {
    code: string;
    message: string;
    retryAfterSeconds?: number | null;
  };
};

export async function fetchWordsPool(limit = 60) {
  const response = await fetch(`/api/words/pool?limit=${limit}`, {
    method: "GET",
    cache: "no-store"
  });

  const data = (await response.json()) as GetWordsPoolResponse | ApiErrorResponse;

  if (!response.ok || !data.ok) {
    throw new Error(data.ok ? "Failed to fetch words pool." : data.error.message);
  }

  return data.items;
}

export async function postWord(input: { text: string; locale?: string }) {
  const response = await fetch("/api/words", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(input)
  });

  const data = (await response.json()) as PostWordSuccessResponse | ApiErrorResponse;

  if (!response.ok || !data.ok) {
    throw new Error(data.ok ? "Failed to post word." : data.error.message);
  }

  return data.item;
}