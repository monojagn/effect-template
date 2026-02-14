// ApiKeyLayer.ts

import { Layer } from "effect"
import { CatsService } from "../services/CreateCat"
import { CatsHttpAdapter } from "../adapters/CatsHttpAdapter"

// LAYER = Glue para unir el servicio y el adaptador
export const CatsLayer = Layer.succeed(  
  CatsService,CatsHttpAdapter
)
