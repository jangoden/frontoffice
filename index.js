const { https } = require("firebase-functions");
const next = require("next");

const isDev = process.env.NODE_ENV !== "production";

const nextApp = next({
  dev: isDev,
  conf: { distDir: ".next" },
});

const handle = nextApp.getRequestHandler();

exports.nextServer = https.onRequest((req, res) => {
  return nextApp.prepare().then(() => {
    return handle(req, res);
  });
});
