// AppLayer.ts

import { Layer } from "effect"
import { ApiKeyLayer } from "./ApiKeyLayer"
import { CatsLayer } from "./CatsLayer"

export const CatsPlusApiLayer = Layer.mergeAll(
  ApiKeyLayer,
  CatsLayer
)
