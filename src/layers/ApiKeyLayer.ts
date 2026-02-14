// ApiKeyLayer.ts

import { Layer } from "effect"
import { ApiKeyService } from "../services/ApiKeyService"
import { ApiKeyHttpAdapter } from "../adapters/ApiKeyHttpAdapter"

// LAYER = Glue para unir el servicio y el adaptador
export const ApiKeyLayer = Layer.succeed(
  ApiKeyService,
  ApiKeyHttpAdapter
)
