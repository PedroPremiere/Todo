import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../app/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/app": path.resolve(__dirname, "../app"),
      "@/components": path.resolve(__dirname, "../app/components"),
      "@/atoms": path.resolve(__dirname, "../app/components/atoms"),
      "@/molecules": path.resolve(__dirname, "../app/components/molecules"),
      "@/organisms": path.resolve(__dirname, "../app/components/organisms"),
      //"@/store": path.resolve(__dirname, "../store"),
      //"@/http": path.resolve(__dirname, "../http"),
      //"@/config": path.resolve(__dirname, "../config"),
    };

    return config;
  },
};
export default config;
