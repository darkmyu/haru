import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `haru-${hash}`,
});

const nextConfig: NextConfig = {};

export default withVanillaExtract(nextConfig);
