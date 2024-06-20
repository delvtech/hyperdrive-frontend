import { Api } from "out/gopher";

export const BASE_URL = "https://gopher.test.buildwithsygma.com";
export const SWAGGER_JSON_URL = `${BASE_URL}/swagger/doc.json`;

export const api = new Api({
  baseUrl: BASE_URL,
});
