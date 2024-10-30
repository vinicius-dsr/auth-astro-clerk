import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import clerk from "@clerk/astro";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), clerk()],
	adapter: node({ mode: "standalone" }),
	output: "server",
});
