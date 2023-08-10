import * as fs from "fs-extra";
import * as path from "path";

const assetsDir = path.join(__dirname, "../src/assets");

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createVueFile = (fileName: string) => {
  const componentName = capitalizeFirstLetter(
    fileName.replace(/\.svg$/i, "").replace(/-/g, " ")
  );

  const svgContent = fs.readFileSync(path.join(assetsDir, fileName), "utf-8");

  const vueContent = `<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    ${svgContent}
  </svg>
</template>

<script lang="ts">
export default {
  name: "${componentName}",
};
</script>
`;

  fs.writeFileSync(path.join(assetsDir, `${componentName}.vue`), vueContent);
};

const generateAssets = () => {
  const svgFiles = fs
    .readdirSync(assetsDir)
    .filter((file) => file.endsWith(".svg"));

  svgFiles.forEach((svgFile) => {
    createVueFile(svgFile);
  });

  console.log("SVG files converted to Vue components.");
};

generateAssets();
