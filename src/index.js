import { startApp } from "Helium/web/index.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// return __dirname to es6
const __dirname = dirname(fileURLToPath(import.meta.url));

// run Helium application
startApp(3000, __dirname);