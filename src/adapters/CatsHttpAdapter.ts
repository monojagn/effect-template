import { Effect } from "effect"
import type { CatsService } from "../services/CreateCat"

export const CatsHttpAdapter: CatsService = {
  createCat: (apiKey, messageIn) =>
    Effect.promise(async () => {

      const url = "http://localhost:3000/cat"

      const headers = {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      }

      console.log("========== HTTP REQUEST ==========")
      console.log("URL:", url)
      console.log("METHOD: POST")
      console.log("HEADERS:", headers)
      console.log("BODY:", JSON.stringify(messageIn, null, 2))
      console.log("==================================")

      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(messageIn)
      })

      const json = await response.json()

      console.log("========== HTTP RESPONSE ==========")
      console.log("STATUS:", response.status)
      console.log("BODY:", JSON.stringify(json, null, 2))
      console.log("===================================")

      return json
    })
}
