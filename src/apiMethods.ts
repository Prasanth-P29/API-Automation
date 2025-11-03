import { APIRequestContext } from "@playwright/test";

export async function postMethod(api: APIRequestContext, endpoint: string, body: any) {
  console.log("➡️ POST:", endpoint);
  console.log("Body:", body);

  const response = await api.post(endpoint, { json: body } as any);
  return response;
}

export async function getMethod(api: APIRequestContext, endpoint: string) {
  console.log("➡️ GET:", endpoint);
  const response = await api.get(endpoint);
  return response;
}

export async function putMethod(api: APIRequestContext, endpoint: string, body: any) {
  console.log("➡️ PUT:", endpoint);
  console.log("Body:", body);
  const response = await api.put(endpoint, { json: body } as any);
  return response;
}

export async function deleteMethod(api: APIRequestContext, endpoint: string) {
  console.log("➡️ DELETE:", endpoint);
  const response = await api.delete(endpoint);
  return response;
}
