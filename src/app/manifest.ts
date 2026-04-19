import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Awtad Energy",
    short_name: "Awtad",
    description:
      "Renewable energy company delivering solar, wind, hybrid, storage and modular infrastructure solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee6",
    theme_color: "#11232d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
