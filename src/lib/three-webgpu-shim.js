// Shim for `three/webgpu`. three-render-objects imports WebGPURenderer from
// this subpath, which otherwise resolves to three.webgpu.js — a standalone
// build that bundles a second copy of three core and triggers the runtime
// "Multiple instances of Three.js" warning. We never use WebGPU (globe.gl
// defaults to WebGLRenderer), so three-render-objects reads the symbol but
// never invokes it. Re-exporting everything from "three" keeps the import
// pointing at the shared module, and the `WebGPURenderer` placeholder
// satisfies the named-import check.
export * from "three";
export const WebGPURenderer = undefined;
