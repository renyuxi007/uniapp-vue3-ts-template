import uniModule from "@dcloudio/vite-plugin-uni"
import { resolve } from "path"
import { defineConfig } from "vite"

const resolveUniPlugin = (mod: unknown) => {
  const first = mod as { default?: unknown }
  if (typeof first.default === "function") return first.default
  if (typeof mod === "function") return mod
  const second = first.default as { default?: unknown } | undefined
  if (typeof second?.default === "function") return second.default
  throw new TypeError("Invalid @dcloudio/vite-plugin-uni export")
}

const uni = resolveUniPlugin(uniModule)

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
    extensions: [".ts", ".js", ".vue", ".json"]
  }
})
