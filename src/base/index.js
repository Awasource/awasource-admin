export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9009"
    : "https://awasource.herokuapp.com";

export const adminRoute = `api/admin`;

