import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/architecture/:year/:month/:day/:slug/",
        destination: "/blog/:slug/",
        permanent: true,
      },
      {
        source: "/architecture/:year/:month/:day/:slug",
        destination: "/blog/:slug/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
