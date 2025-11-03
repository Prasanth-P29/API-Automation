import { request, APIRequestContext } from "@playwright/test";
import * as fs from "fs";

export async function initializeApiClient(): Promise<APIRequestContext> {
  const properties = fs.readFileSync("src/config.properties", "utf-8");
  const baseURLLine = properties.split("\n").find(line => line.startsWith("BASE_URL"));
  const baseURL = baseURLLine?.split("=")[1].trim();

  console.log("🌐 API client initialized with base URL:", baseURL);

  const context = await request.newContext({
    baseURL,
    extraHTTPHeaders: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  });

  return context;
}
