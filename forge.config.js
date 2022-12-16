module.exports = {
  packagerConfig: {
    name: "Crud",
    icon: "./build/appIcons/appIcon.ico",
    asar: true,
    ignore: [
      "^\\/public",
      "^\\/src",
      "^\\/node_modules/(?!electron-squirrel-startup)",
      "README.md",
      ".gitignore",
      "forge.config.js",
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        iconUrl: "C:/Users/Douwi/Desktop/CRUD-RTK/build/appIcons/appIcon.ico",
        setupIcon: "./build/appIcons/appIcon.ico",
      },
    },
  ],
};
