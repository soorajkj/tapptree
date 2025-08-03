import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {},
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
