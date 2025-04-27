import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  test: {
    workspace: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
          tailwindcss(),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            name: "chromium",
            provider: "playwright",
          },
          setupFiles: [".storybook/vitest.setup.js"],
        },
      },
    ],
  },
});
