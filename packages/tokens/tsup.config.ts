import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: {
    entry: "src/index.ts",
  },
  outExtension() {
    return {
      js: ".js",
    };
  },
  clean: true,
});
