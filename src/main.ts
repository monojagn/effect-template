import { Effect } from "effect";
import { NodeContext, NodeRuntime } from "@effect/platform-node";

const program = Effect.log("Hello World!")

NodeRuntime.runMain(
    program.pipe(Effect.provide(NodeContext.layer))
)