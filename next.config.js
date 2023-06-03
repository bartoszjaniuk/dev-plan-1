/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API:
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cli640sav352301uo08b8bux1/master",
  },
  images: { domains: ["fakestoreapi.com", "robohash.org"] },
};

module.exports = nextConfig;
