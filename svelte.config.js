import { createHighlighter } from "@bitmachina/highlighter"
import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      highlight: {
        highlighter: await createHighlighter({ theme: "github-dark" })
      }
    })
  ],
  kit: { adapter: adapter() },
  extensions: [".svelte", ".svx", ".md"]
}

export default config
