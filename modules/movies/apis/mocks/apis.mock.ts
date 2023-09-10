export const mockAPIs = [
  (async () => (await import("./movies-api.mock.json")).default)(),
];
