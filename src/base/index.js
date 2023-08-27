export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9009"
    : "https://awasource-api.onrender.com";

export const adminRoute = `api/admin`;

