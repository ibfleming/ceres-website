/**
 * Options and values for React Globe object.
 * react-globe: https://github.com/chrisrzhou/react-globe
 */
const globeConfig = {
  keyword: "",
  globeBackgroundTexture: "",
  globeCloudsTexture: "../public/earth-clouds.webp",
  globeTexture: "../public/earth-texture.webp",
  globeBumpTexture: "../public/earth-bump.webp",
  options: {
    ambientLightColor: "#b34444",
    ambientLightIntensity: 1,
    cameraAutoRotateSpeed: 0.01,
    cameraRotateSpeed: 0.2,
    enableCameraZoom: false,
    enableDefocus: false,
    focusAnimationDuration: 1000,
    globeCloudsOpacity: 0.1,
    globeGlowCoefficient: 0.1,
    globeGlowColor: "red",
    globeGlowPower: 5,
    globeGlowRadiusScale: 0.2,
    pointLightIntensity: 3,
    pointLightPositionRadiusScales: [-1, 1.5, -2.5] as [number, number, number],
  },
};

export default globeConfig;
