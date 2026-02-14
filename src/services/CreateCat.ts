// CatsService.ts

import { Context, Effect } from "effect"

export interface CatsService {
  createCat: (
    apiKey: string,
    MessageIn: { name: string; breed: string }
  ) => Effect.Effect<string, never, never>
}

export const CatsService =
  Context.GenericTag<CatsService>("CatsService")
