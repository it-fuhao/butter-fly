{
  "name": "@butter-fly/{{ componentName }}",
  "version": "1.0.0",
  "description": "",
  "author": "",
  "homepage": "",
  "license": "ISC",
  "main": "index.ts",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "scripts": {
    "build": "node ../../command/build.js package={{ componentName }}"
  }
}
