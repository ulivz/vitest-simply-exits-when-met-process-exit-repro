import { defineConfig } from "vitest/config";

// process.on("exit", () => {
//   console.trace("exit (manual trace log)");
// });

export default defineConfig({
  test: {
    globals: true,
    reporters: ["default"],
    include: ["__tests__/**/*.{test,spec}.ts"],
    testTimeout: 100000,
  },
});
