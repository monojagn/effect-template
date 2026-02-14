import { Effect } from "effect"
import { program } from "./application/program"
import { CatsPlusApiLayer} from "./layers/CatsplusApi"

Effect.runPromise(
  program.pipe(
    Effect.provide(CatsPlusApiLayer)
  )
)
