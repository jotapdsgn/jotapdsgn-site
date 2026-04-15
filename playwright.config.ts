// playwright.config.ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  // Configurações globais do Playwright
  timeout: 60000,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  reporter: [["list"], ["html", { outputFolder: "playwright-report" }]],
});