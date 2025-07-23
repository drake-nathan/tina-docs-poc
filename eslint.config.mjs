// @ts-check
import { eslintConfig } from "js-style-kit";

export default eslintConfig({
  ignores: [".docusaurus", "build"],
  react: {
    framework: "none",
  },
  typescript: "tsconfig.eslint.json",
});
