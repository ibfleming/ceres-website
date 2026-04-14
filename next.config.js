/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    resolveAlias: {
      // three-render-objects imports WebGPURenderer from "three/webgpu", which
      // resolves to three.webgpu.js — a standalone build that bundles its own
      // copy of three core and trips the "Multiple instances of Three.js"
      // warning. Shim the subpath to a local module that re-exports from the
      // shared "three" entry so Turbopack only evaluates three core once. The
      // shim exports a WebGPURenderer placeholder so the named import
      // resolves; the symbol is never invoked because globe.gl defaults to
      // WebGLRenderer.
      "three/webgpu": "./src/lib/three-webgpu-shim.js",
    },
  },
};

export default config;
