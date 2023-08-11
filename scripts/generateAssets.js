import fs from "fs";
import path from "path";

function createFile(svgFile) {
  // Read the file asynchronously
  const data = fs.readFileSync(svgFile, "utf-8", (err) => {
    if (err) {
      console.error("Error creating file:", err);
      return;
    }
  });

  // Specify the directory path and file name
  const directoryPath = "src/assets";

  // Extract the file name and extension
  const { name, ext } = path.parse(svgFile);
  const fileName = `${name[0].toUpperCase()}${name.substring(1)}.vue`;

  // Combine the directory path and file name
  const filePath = `${directoryPath}/${fileName}`;

  // file content
  const fileContent = `
    <script lang="ts">
    export default {
      name: "${name}",
    };
    </script>
    
    <template>
      ${data}
    </template>
  `;

  // Write the content to the file asynchronously
  fs.writeFileSync(filePath, fileContent, "utf-8", (err) => {
    if (err) {
      console.error("Error creating file:", err);
      return;
    }
    console.log("File created successfully!");
  });
}

const filePath = "src/assets/rezzo.svg";
createFile(filePath);
