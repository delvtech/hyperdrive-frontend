// Vite only handles syntax transforms and does not cover polyfills by default.
// See: https://vitejs.dev/guide/build.html#browser-compatibility

// This file holds the necessary polyfills for Rainbowkit to work w/ Vite and
// are loaded in index.html via script tag.
// See: https://www.rainbowkit.com/docs/installation#vite

import { Buffer } from "buffer";

window.global = window.global ?? window;
window.Buffer = window.Buffer ?? Buffer;
window.process = window.process ?? { env: {} }; // Minimal process polyfill

export {};
