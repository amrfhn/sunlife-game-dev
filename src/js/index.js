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
import "./vue-state"

// Import the JS components
import "./components/nav";
import "./components/carousels";
import "./components/forms";
import "./components/game-prototype";
import "./components/game-main";
import "./components/game-scenes";
import "./components/game";
import "./components/fb-login";
import "./components/leaderboard";
import "./components/reward-modal";
import "./components/redirect";

import "./pages/collections";
import "./pages/prizes";