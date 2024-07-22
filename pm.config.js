const { exec } = require("child_process");
const { ar } = require("date-fns/locale");
const { watch } = require("fs");
const { env } = require("process");

module.exports = {
  apps: [
    {
      name: "animals",
      script: "./.next/server/pages/_app.js",
      args: "start --port 3000",
      env: {
        NODE_ENV: "development",
      },
      watch: false,
      instances: "max",
      exec_mode: "cluster",
      log_file: "logs/animals.log",
    },
  ],
};
