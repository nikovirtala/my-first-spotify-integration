const { web } = require("projen");
const project = new web.ReactProject({
  defaultReleaseBranch: "main",
  name: "my-first-spotify-integration",
  deps: [
    "react-spotify-api",
    "react-spotify-auth",
    "react-spotify-web-playback",
    "js-cookie",
  ],
  devDeps: ["prettier"],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  depsUpgradeAutoMerge: true,
  autoApproveOptions: {
    allowedUsernames: ['nikovirtala'],
  },
  prettier: true,
  jest: false,
  release: false,
});
project.synth();
