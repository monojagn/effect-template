// ApiKeyHttpAdapter.ts

import { Effect } from "effect"
import type { ApiKeyService } from "../services/ApiKeyService"

export const ApiKeyHttpAdapter: ApiKeyService = {
  getApiKey: Effect.promise(() =>
    fetch("http://localhost:3000/register/Mono")
      .then(res => res.json())
  )
}
