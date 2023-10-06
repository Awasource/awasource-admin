export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://awasource-api.onrender.com"
    // ? "http://localhost:9009"
    : "https://awasource-api.onrender.com";

export const adminRoute = `api/admin`;

