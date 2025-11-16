import {defineConfig} from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],
  srcDir: "src",
  manifest: {
    name: "Sent Sync",
  },
  autoIcons: {
    developmentIndicator: false,
    baseIconPath: "assets/icon_128x128.png",
  },
});
