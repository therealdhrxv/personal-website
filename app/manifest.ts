import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dhruv Pankaj Patel",
    short_name: "Dhruv",
    start_url: "/",
    display: "browser",
    background_color: "#d8dee9",
    theme_color: "#d8dee9",
    icons: [{ src: "/icon", sizes: "64x64", type: "image/png" }, { src: "/apple-icon", sizes: "180x180", type: "image/png" }],
  };
}
