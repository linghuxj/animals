const { exec } = require("child_process");
const { watch } = require("fs");
const { env } = require("process");

module.exports = {
  apps: [
    {
      name: "animals",
      script: "./.next/server/pages/_app.js",
      env: {
        NODE_ENV: "development",
      },
      watch: false,
      instances: "max",
      exec_mode: "cluster",
    },
  ],
};
