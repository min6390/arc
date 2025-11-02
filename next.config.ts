import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "arcrestaurantequipment.com",
            },
            {
                protocol: "https",
                hostname: "cdn2.cellphones.com.vn",
            },
            {
                protocol: "https",
                hostname: "2tmobile.com",
            },
        ],
    },
};

export default nextConfig;
