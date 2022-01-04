// Import the main styles
import "../scss/main.scss";

// Polyfills for Internet Explorer
import "core-js/stable";
import "regenerator-runtime/runtime";

// SVG Polyfill for Internet Explorer
import svg4everybody from 'svg4everybody';
svg4everybody()

// Import vendor libraries
import "bootstrap";

// Global Scripts
import "./global";
import "./helpers/validations"

// Import the JS components
import "./components/carousels";
import "./components/forms";
import "./components/game-prototype";
import "./components/mobile-nav";
import "./components/game-main";
import "./components/game-scenes";
import "./components/game-phaser";




