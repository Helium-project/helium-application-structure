import { startApp } from "Helium/core/index.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// return __dirname to es6
const __dirname = dirname(fileURLToPath(import.meta.url));

// run Helium application
startApp(3000, __dirname, {
    spa: true, // Single Page Application, it is recommended to use without using third-party libraries such as React
    useBuild: true, // Each index.js file will be compiled via esbuild, allowing you to create more complex applications
    changeFileLog: true, // Notify the console about file changes, will only work if useBuild is enabled
});