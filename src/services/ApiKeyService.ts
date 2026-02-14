import { Context, Effect } from "effect"

export interface ApiKeyService {
  getApiKey: Effect.Effect<string, never, never>
}

export const ApiKeyService = Context.GenericTag<ApiKeyService>("ApiKeyService")