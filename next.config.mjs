import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
  },
};

const millionConfig = {
  auto: true,// if you're using RSC: auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
