// program.ts

import { Effect } from "effect"
import { ApiKeyService } from "../services/ApiKeyService"
import { CatsService } from "../services/CreateCat"

export const program = Effect.gen(function* () {
  const svcKey = yield* ApiKeyService
  const apiKey = yield* svcKey.getApiKey
  yield* Effect.log("API KEY: " + apiKey)

  const svcMinino = yield* CatsService
  const responseCat =  yield* svcMinino.createCat(apiKey,{ name: "Michi", breed: "Sphynx" })
  
  yield* Effect.log("API KEY: " + apiKey)
  yield* Effect.log("Minino creado : " + responseCat)
  
  
  return responseCat

})
