import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");// src/main.ts
import { bootstrapApplication } from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_platform-browser.js?v=f25d82a0";

// src/app/app.config.ts
import { provideZoneChangeDetection } from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_core.js?v=f25d82a0";
import { provideRouter } from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_router.js?v=f25d82a0";

// src/app/landing-page/landing-page.component.ts
import { Component } from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_core.js?v=f25d82a0";
import * as i0 from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_core.js?v=f25d82a0";
var _c0 = (a0) => ({ "hardcore-room": a0 });
var _c1 = (a0, a1) => ({ "room-btn": a0, "hard-core-btn": a1 });
var _c2 = (a0) => ({ "color": a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.label;
function LandingPageComponent_For_28_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0, " ENTER IF YOU DARE ");
  }
}
function LandingPageComponent_For_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0, " ENTER ");
  }
}
function LandingPageComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 28);
    i0.\u0275\u0275element(1, "img", 29);
    i0.\u0275\u0275elementStart(2, "div", 30);
    i0.\u0275\u0275text(3);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(4, "div", 31);
    i0.\u0275\u0275text(5);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(6, "button");
    i0.\u0275\u0275template(7, LandingPageComponent_For_28_Conditional_7_Template, 1, 0)(8, LandingPageComponent_For_28_Conditional_8_Template, 1, 0);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.\u0275\u0275classMap(i0.\u0275\u0275pureFunction1(8, _c0, item_r1.id == "hardcore-mode"));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("src", item_r1.icon, i0.\u0275\u0275sanitizeUrl);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1(" ", item_r1.title, " ");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate1(" ", item_r1.description, " ");
    i0.\u0275\u0275advance();
    i0.\u0275\u0275classMap(i0.\u0275\u0275pureFunction2(10, _c1, item_r1.id != "hardcore-mode", item_r1.id == "hardcore-mode"));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(item_r1.id == "hardcore-mode" ? 7 : 8);
  }
}
function LandingPageComponent_For_38_Conditional_8_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 42);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r2 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275styleMap(i0.\u0275\u0275pureFunction1(3, _c2, part_r2.color));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(part_r2.text);
  }
}
function LandingPageComponent_For_38_Conditional_8_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const part_r2 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(part_r2.text);
  }
}
function LandingPageComponent_For_38_Conditional_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275template(0, LandingPageComponent_For_38_Conditional_8_For_1_Conditional_0_Template, 2, 5, "span", 41)(1, LandingPageComponent_For_38_Conditional_8_For_1_Conditional_1_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const part_r2 = ctx.$implicit;
    i0.\u0275\u0275conditional(part_r2.highlight ? 0 : 1);
  }
}
function LandingPageComponent_For_38_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275repeaterCreate(0, LandingPageComponent_For_38_Conditional_8_For_1_Template, 2, 1, null, null, i0.\u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const item_r3 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275repeater(item_r3.descriptionHighlight);
  }
}
function LandingPageComponent_For_38_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r3 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275textInterpolate1(" ", item_r3.description, " ");
  }
}
function LandingPageComponent_For_38_For_12_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div");
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const badge_r4 = ctx.$implicit;
    i0.\u0275\u0275classMap("badge badge-" + badge_r4.variant);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate1(" ", badge_r4.label, " ");
  }
}
function LandingPageComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 32);
    i0.\u0275\u0275element(1, "div", 33);
    i0.\u0275\u0275elementStart(2, "div", 34);
    i0.\u0275\u0275element(3, "img", 35);
    i0.\u0275\u0275elementStart(4, "div", 36)(5, "div", 37);
    i0.\u0275\u0275text(6);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(7, "div", 38);
    i0.\u0275\u0275template(8, LandingPageComponent_For_38_Conditional_8_Template, 2, 0)(9, LandingPageComponent_For_38_Conditional_9_Template, 1, 1);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(10, "div", 39);
    i0.\u0275\u0275repeaterCreate(11, LandingPageComponent_For_38_For_12_Template, 2, 3, "div", 40, _forTrack1);
    i0.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.\u0275\u0275classMap("theme-" + item_r3.theme);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("src", item_r3.icon, i0.\u0275\u0275sanitizeUrl);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate1(" ", item_r3.title, " ");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275conditional(item_r3.descriptionHighlight ? 8 : 9);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275repeater(item_r3.badges);
  }
}
var LandingPageComponent = class _LandingPageComponent {
  roomTypes = [
    {
      "id": "mixed-bag",
      "title": "Mixed Bag",
      "description": "A chaotic swirl of every topic. Perfect for the ultimate generalist.",
      "icon": "mixed-bag.svg"
    },
    {
      "id": "science-tech",
      "title": "Science & Tech",
      "description": "Quantum physics to Javascript frameworks. Not for the faint of heart.",
      "icon": "science-tech.svg"
    },
    {
      "id": "history-culture",
      "title": "History & Culture",
      "description": "Uncover the secrets of civilizations and artistic revolutions.",
      "icon": "history-culture.svg"
    },
    {
      "id": "pop-culture",
      "title": "Pop Culture",
      "description": "Movies, music, and the digital zeitgeist. Stay relevant.",
      "icon": "pop-culture.svg"
    },
    {
      "id": "brain-teasers",
      "title": "Brain Teasers",
      "description": "Logic puzzles and lateral thinking challenges. Sharpen your mind.",
      "icon": "brain-teasers.svg"
    },
    {
      "id": "hardcore-mode",
      "title": "Hardcore Mode",
      "description": "One wrong answer and you're out. Maximum pressure.",
      "icon": "hardcore-mode.svg"
    },
    {
      "id": "gaming-esports",
      "title": "Gaming & Esports",
      "description": "From 8-bit classics to the latest global tournament metas.",
      "icon": "gaming-esports.svg"
    },
    {
      "id": "sports",
      "title": "Sports",
      "description": "The physics of the field and the history of champions.",
      "icon": "sports.svg"
    }
  ];
  infoCards = [
    {
      "id": "real-time-battles",
      "icon": "players.svg",
      "title": "REAL-TIME QUIZ BATTLES",
      "description": "Deploy your knowledge in high-velocity arena matches. Compete with up to 10 players simultaneously where every millisecond counts. Our unique speed-based scoring algorithm rewards both accuracy and rapid neural firing.",
      "descriptionHighlight": [
        { "text": "Deploy your knowledge in high-velocity arena matches. Compete with up to ", "highlight": false },
        { "text": "10 players simultaneously", "highlight": true, "color": "#c1fffe" },
        { "text": " where every millisecond counts. Our unique ", "highlight": false },
        { "text": "speed-based scoring", "highlight": true, "color": "#c1fffe" },
        { "text": " algorithm rewards both accuracy and rapid neural firing.", "highlight": false }
      ],
      "theme": "cyan",
      "badges": [
        { "label": "10 PLAYERS", "variant": "default" },
        { "label": "LOW LATENCY", "variant": "accent" }
      ]
    },
    {
      "id": "instant-play",
      "icon": "lightning.svg",
      "title": "INSTANT PLAY",
      "description": "Frictionless entry into the matrix. Experience our zero-signup flow\u2014simply designate an alias and connect to a neural uplink immediately. No forms, no delays, just pure competitive intellect.",
      "descriptionHighlight": [
        { "text": "Frictionless entry into the matrix. Experience our ", "highlight": false },
        { "text": "zero-signup flow", "highlight": true, "color": "#ff51fa" },
        { "text": "\u2014simply designate an alias and ", "highlight": false },
        { "text": "connect to a neural uplink immediately", "highlight": true, "color": "#ff51fa" },
        { "text": ". No forms, no delays, just pure competitive intellect.", "highlight": false }
      ],
      "theme": "magenta",
      "badges": [
        { "label": "NO SIGNUP", "variant": "default" },
        { "label": "QUICK JOIN", "variant": "accent" }
      ]
    },
    {
      "id": "diverse-arenas",
      "icon": "grid.svg",
      "title": "DIVERSE ARENAS",
      "description": "Master multiple intelligence domains. Choose from specialized battlegrounds like Brain Teasers for logic, Hardcore Mode for high-stakes pressure, or tactical science and gaming sectors.",
      "descriptionHighlight": [
        { "text": "Master multiple intelligence domains. Choose from specialized battlegrounds like ", "highlight": false },
        { "text": "Brain Teasers", "highlight": true, "color": "#ffff00" },
        { "text": " for logic, ", "highlight": false },
        { "text": "Hardcore Mode", "highlight": true, "color": "#ff5555" },
        { "text": " for high-stakes pressure, or tactical science and gaming sectors.", "highlight": false }
      ],
      "theme": "yellow",
      "badges": [
        { "label": "8+ THEMES", "variant": "default" },
        { "label": "DAILY ROTATION", "variant": "accent" }
      ]
    },
    {
      "id": "cognitive-snapshot",
      "icon": "question-mind.svg",
      "title": "COGNITIVE SNAPSHOT",
      "description": "Post-battle diagnostics for high-performers. Receive a deep neural analysis including metrics on response latency, logic consistency, and category-specific accuracy to sharpen your competitive edge.",
      "descriptionHighlight": [
        { "text": "Post-battle diagnostics for high-performers. Receive a deep ", "highlight": false },
        { "text": "neural analysis", "highlight": true, "color": "#c1fffe" },
        { "text": " including metrics on ", "highlight": false },
        { "text": "response latency, logic consistency, and category-specific accuracy", "highlight": true, "color": "#c1fffe" },
        { "text": " to sharpen your competitive edge.", "highlight": false }
      ],
      "theme": "cyan",
      "badges": [
        { "label": "PERFORMANCE AI", "variant": "default" },
        { "label": "STAT TRACKING", "variant": "accent" }
      ]
    }
  ];
  static \u0275fac = function LandingPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _LandingPageComponent, selectors: [["app-landing-page"]], decls: 39, vars: 0, consts: [["src", "brainbg.svg", 1, "brainimg"], [1, "main-container"], [1, "main-text", 2, "margin-top", "2rem"], [2, "color", "#c1fffe"], [2, "color", "#ff51fa"], [1, "main-input-box", 2, "margin-top", "4rem"], [1, "gradient"], [1, "input-row"], [1, "flex-col-05", 2, "width", "17rem"], [1, "input-label-txt", 2, "color", "#c1fffeb2"], [1, "input-box"], ["src", "fingerprint.svg", "alt", ""], ["type", "text", "placeholder", "NEURAL_STRIKER_01"], [1, "flex-col-05", 2, "width", "14rem"], [1, "input-label-txt", 2, "color", "#ff51fab2"], ["src", "phone.svg", "alt", ""], ["type", "text", "placeholder", "6 DIGIT ROOM CODE"], [1, "join-btn"], [1, "info-msg"], [1, "room-grid", 2, "margin-top", "4rem"], [1, "room-item", 3, "class"], [1, "info-container", 2, "margin-top", "4rem", "margin-bottom", "10rem"], [1, "header"], [1, "header-main-txt"], [1, "divider"], [1, "subheader"], [1, "info-grid"], [1, "info-card", 3, "class"], [1, "room-item"], [1, "room-icon", 3, "src"], [1, "room-title"], [1, "room-description"], [1, "info-card"], [1, "badge-overlay"], [2, "position", "relative", "z-index", "1", "display", "flex", "gap", "1.5rem"], [1, "badge-icon", 3, "src"], [2, "display", "flex", "flex-direction", "column", "gap", "0.75rem", "flex", "1"], [1, "badge-title"], [1, "badge-description"], [2, "display", "flex", "gap", "0.75rem", "flex-wrap", "wrap", "margin-top", "0.5rem"], [3, "class"], [2, "font-weight", "600", 3, "style"], [2, "font-weight", "600"]], template: function LandingPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275element(0, "img", 0);
      i0.\u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      i0.\u0275\u0275text(4, "CHOOSE YOUR");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(5, "div", 4);
      i0.\u0275\u0275text(6, "BATTLEGROUND");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(7, "div", 5);
      i0.\u0275\u0275element(8, "div", 6);
      i0.\u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9);
      i0.\u0275\u0275text(12, " COMBATANT ALIAS ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(13, "div", 10);
      i0.\u0275\u0275element(14, "img", 11)(15, "input", 12);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(16, "div", 13)(17, "div", 14);
      i0.\u0275\u0275text(18, " SECURE LINK CODE ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(19, "div", 10);
      i0.\u0275\u0275element(20, "img", 15)(21, "input", 16);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(22, "button", 17);
      i0.\u0275\u0275text(23, "JOIN ARENA");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(24, "div", 18);
      i0.\u0275\u0275text(25, " Initialize neural uplink protocol \u2022 Secure connection required ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(26, "div", 19);
      i0.\u0275\u0275repeaterCreate(27, LandingPageComponent_For_28_Template, 9, 13, "div", 20, _forTrack0);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(29, "div", 21)(30, "div", 22)(31, "div", 23);
      i0.\u0275\u0275text(32, " SYSTEM INTELLIGENCE ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(33, "div", 24);
      i0.\u0275\u0275elementStart(34, "div", 25);
      i0.\u0275\u0275text(35, " Neural Network Architecture & Performance Core ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(36, "div", 26);
      i0.\u0275\u0275repeaterCreate(37, LandingPageComponent_For_38_Template, 13, 5, "div", 27, _forTrack0);
      i0.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(27);
      i0.\u0275\u0275repeater(ctx.roomTypes);
      i0.\u0275\u0275advance(10);
      i0.\u0275\u0275repeater(ctx.infoCards);
    }
  }, styles: ['\n\n.brainimg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 50%;\n  height: 50%;\n  object-fit: cover;\n  opacity: 0.4;\n  pointer-events: none;\n  z-index: 0;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: fit-content;\n  width: 100%;\n}\n.main-text[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 15px rgba(0, 255, 255, 0.6);\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  white-space: nowrap;\n  color: transparent;\n  font-size: 4.5rem;\n  text-align: center;\n  line-height: 4.5rem;\n}\n.main-input-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 55%;\n  align-items: flex-start;\n  gap: 1.5rem;\n  padding: 2rem;\n  position: relative;\n  background-color: rgba(28, 29, 55, 0.6);\n  border-radius: 1rem;\n  overflow: hidden;\n  border: 1px solid;\n  border-color: rgba(69, 70, 92, 0.2980392157);\n}\n.main-input-box[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%] {\n  position: absolute;\n  height: calc(100% - 2px);\n  top: 1px;\n  left: 1px;\n  width: 4px;\n  background:\n    linear-gradient(\n      180deg,\n      rgb(193, 255, 254) 0%,\n      rgb(255, 81, 250) 100%);\n}\n.main-input-box[_ngcontent-%COMP%]   .input-row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-input-box[_ngcontent-%COMP%]   .input-label-txt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-family: "Manrope", Helvetica;\n  font-weight: 800;\n  font-size: 10px;\n  letter-spacing: 2px;\n  line-height: 15px;\n  white-space: nowrap;\n}\n.main-input-box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%] {\n  display: flex;\n  background: #000000;\n  gap: 0.5rem;\n  background: #000000;\n  padding: 1rem;\n  border-radius: 0.5rem;\n}\n.main-input-box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  color: #E4E3FE;\n  font-weight: 700;\n  background: #000000;\n}\n.main-input-box[_ngcontent-%COMP%]   .join-btn[_ngcontent-%COMP%] {\n  display: flex;\n  height: 3.5rem;\n  width: 8rem;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 0;\n  position: relative;\n  border-radius: 0.5rem;\n  background:\n    linear-gradient(\n      90deg,\n      rgb(193, 255, 254) 0%,\n      rgb(0, 255, 255) 100%);\n  box-shadow: 0px 4px 6px -4px rgba(193, 255, 254, 0.2), 0px 10px 15px -3px rgba(193, 255, 254, 0.2);\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #006767;\n  font-size: 0.75rem;\n  text-align: center;\n  letter-spacing: 1.5px;\n  line-height: 20px;\n  white-space: nowrap;\n}\n.main-input-box[_ngcontent-%COMP%]   .info-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.75rem;\n  color: #a9a9c3;\n  opacity: 0.5;\n  white-space: nowrap;\n  letter-spacing: 1px;\n  line-height: 1rem;\n  font-family: "Manrope", Helvetica;\n  align-self: center;\n}\n.room-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 1.5rem;\n  width: 70%;\n  z-index: 1;\n}\n.room-grid[_ngcontent-%COMP%]   .room-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  background-color: rgba(28, 29, 55, 0.6);\n  border-radius: 1rem;\n  overflow: hidden;\n  border: 1px solid;\n  border-color: rgba(69, 70, 92, 0.2980392157);\n  padding: 1rem;\n}\n.room-grid[_ngcontent-%COMP%]   .room-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n.room-grid[_ngcontent-%COMP%]   .room-title[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #E4E3FE;\n  font-size: 1.125rem;\n  letter-spacing: 0;\n  line-height: 1.75rem;\n}\n.room-grid[_ngcontent-%COMP%]   .room-description[_ngcontent-%COMP%] {\n  font-family: "Manrope", Helvetica;\n  font-weight: 400;\n  color: #a9a9c3;\n  opacity: 0.5;\n  font-size: 0.75rem;\n  letter-spacing: 0;\n  line-height: 1rem;\n}\n.room-grid[_ngcontent-%COMP%]   .room-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.85rem 0;\n  background-color: #22233f;\n  border-radius: 0.75rem;\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #e4e3fe;\n  text-align: center;\n  border: 1px solid rgba(193, 255, 254, 0.2);\n  margin-top: auto;\n}\n.room-grid[_ngcontent-%COMP%]   .hardcore-room[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-color: #ff716c !important;\n  animation: _ngcontent-%COMP%_pulseDanger 1.5s infinite;\n}\n.room-grid[_ngcontent-%COMP%]   .hardcore-room[_ngcontent-%COMP%]   .room-title[_ngcontent-%COMP%] {\n  color: #ff716c !important;\n}\n.room-grid[_ngcontent-%COMP%]   .hardcore-room[_ngcontent-%COMP%]   .hard-core-btn[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.85rem 0;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(193, 255, 254, 0.2);\n  margin-top: auto;\n  color: white;\n  font-weight: 700;\n  background: #111;\n}\n.room-grid[_ngcontent-%COMP%]   .hardcore-room[_ngcontent-%COMP%]   .hard-core-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 113, 108, 0.9),\n      rgba(215, 56, 59, 0.9));\n  opacity: 0.85;\n  z-index: 0;\n}\n.room-grid[_ngcontent-%COMP%]   .hardcore-room[_ngcontent-%COMP%]   .hard-core-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.room-grid[_ngcontent-%COMP%]   .hardcore-room[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 113, 108, 0.18),\n      rgba(215, 56, 59, 0.18));\n  z-index: 0;\n  pointer-events: none;\n}\n.room-grid[_ngcontent-%COMP%]   .hardcore-room[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@keyframes _ngcontent-%COMP%_pulseDanger {\n  0% {\n    box-shadow: 0 0 0px rgba(255, 113, 108, 0.2);\n  }\n  50% {\n    box-shadow: 0 0 25px rgba(255, 113, 108, 0.35);\n  }\n  100% {\n    box-shadow: 0 0 0px rgba(255, 113, 108, 0.2);\n  }\n}\n.room-item[_ngcontent-%COMP%] {\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.room-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);\n}\n.main-input-box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      120deg,\n      transparent 40%,\n      rgba(193, 255, 254, 0.08) 50%,\n      transparent 60%);\n  animation: _ngcontent-%COMP%_scan 3s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_scan {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-main-txt[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #c1fffe;\n  font-size: 2.25rem;\n  letter-spacing: 0;\n  line-height: 2rem;\n}\n.info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 80%;\n  margin: 1rem 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(193, 255, 254, 0) 0%,\n      rgb(193, 255, 254) 50%,\n      rgba(193, 255, 254, 0) 100%);\n}\n.info-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%] {\n  font-family: "Manrope", Helvetica;\n  font-weight: 400;\n  color: #a9a9c3;\n  opacity: 0.5;\n  font-size: 0.875rem;\n  letter-spacing: 1px;\n  line-height: 1.25rem;\n}\n.info-grid[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-left: 5rem;\n  margin-right: 5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n  z-index: 1;\n}\n@media (max-width: 1024px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .info-grid[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    gap: 1rem;\n  }\n}\n.info-card[_ngcontent-%COMP%] {\n  background-color: rgba(28, 29, 55, 0.6);\n  border-radius: 1rem;\n  border: 1px solid rgba(69, 70, 92, 0.2980392157);\n  padding: 1.5rem;\n  overflow: hidden;\n  position: relative;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);\n}\n@media (max-width: 768px) {\n  .info-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n}\n.info-card.theme-cyan[_ngcontent-%COMP%] {\n  border-color: rgba(69, 70, 92, 0.4);\n}\n.info-card.theme-cyan[_ngcontent-%COMP%]:hover {\n  border-color: rgba(193, 255, 254, 0.3);\n}\n.info-card.theme-cyan[_ngcontent-%COMP%]   .badge-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(193, 255, 254, 0.08) 0%,\n      rgba(0, 255, 255, 0.05) 100%);\n}\n.info-card.theme-cyan[_ngcontent-%COMP%]   .badge-title[_ngcontent-%COMP%] {\n  text-shadow: 0 0 10px rgba(193, 255, 254, 0.3);\n}\n.info-card.theme-magenta[_ngcontent-%COMP%] {\n  border-color: rgba(255, 81, 250, 0.3);\n  background: rgba(75, 35, 85, 0.4);\n}\n.info-card.theme-magenta[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 81, 250, 0.5);\n  box-shadow: 0 15px 40px rgba(255, 81, 250, 0.15);\n}\n.info-card.theme-magenta[_ngcontent-%COMP%]   .badge-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 81, 250, 0.1) 0%,\n      rgba(150, 50, 200, 0.05) 100%);\n}\n.info-card.theme-magenta[_ngcontent-%COMP%]   .badge-title[_ngcontent-%COMP%] {\n  text-shadow: 0 0 10px rgba(255, 81, 250, 0.3);\n}\n.info-card.theme-yellow[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 0, 0.2);\n  background: rgba(50, 50, 20, 0.4);\n}\n.info-card.theme-yellow[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 0, 0.4);\n  box-shadow: 0 15px 40px rgba(255, 255, 0, 0.1);\n}\n.info-card.theme-yellow[_ngcontent-%COMP%]   .badge-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 0, 0.08) 0%,\n      rgba(255, 150, 0, 0.05) 100%);\n}\n.info-card.theme-yellow[_ngcontent-%COMP%]   .badge-title[_ngcontent-%COMP%] {\n  text-shadow: 0 0 10px rgba(255, 255, 0, 0.3);\n}\n.badge-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(193, 255, 254, 0.05) 0%,\n      rgba(193, 255, 254, 0.02) 100%);\n  pointer-events: none;\n}\n.badge-icon[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  flex-shrink: 0;\n  object-fit: contain;\n}\n@media (max-width: 768px) {\n  .badge-icon[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n}\n.badge-title[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #e4e3fe;\n  font-size: 1.125rem;\n  line-height: 1.25rem;\n  letter-spacing: 0;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .badge-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.badge-description[_ngcontent-%COMP%] {\n  font-family: "Manrope", Helvetica;\n  font-weight: 400;\n  color: #a9a9c3;\n  opacity: 0.6;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .badge-description[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n    line-height: 1.15rem;\n  }\n}\n.badge-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline;\n  font-weight: inherit;\n  color: inherit;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 600;\n  font-size: 0.625rem;\n  letter-spacing: 1px;\n  padding: 0.5rem 0.85rem;\n  border-radius: 0.375rem;\n  text-transform: uppercase;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .badge[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n    padding: 0.4rem 0.65rem;\n  }\n}\n.badge-default[_ngcontent-%COMP%] {\n  color: #c1fffe;\n  border: 1px solid rgba(193, 255, 254, 0.4);\n  background: rgba(193, 255, 254, 0.08);\n}\n.badge-default[_ngcontent-%COMP%]:hover {\n  border-color: #c1fffe;\n  background: rgba(193, 255, 254, 0.15);\n  box-shadow: 0 0 12px rgba(193, 255, 254, 0.2);\n}\n.badge-accent[_ngcontent-%COMP%] {\n  color: #ff51fa;\n  border: 1px solid rgba(255, 81, 250, 0.4);\n  background: rgba(255, 81, 250, 0.08);\n}\n.badge-accent[_ngcontent-%COMP%]:hover {\n  border-color: #ff51fa;\n  background: rgba(255, 81, 250, 0.15);\n  box-shadow: 0 0 12px rgba(255, 81, 250, 0.2);\n}\n@media (max-width: 1024px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .info-grid[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=landing-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(LandingPageComponent, [{
    type: Component,
    args: [{ selector: "app-landing-page", template: `









<img src="brainbg.svg" class="brainimg" /> 

<div class="main-container">

    <div class="main-text" style="margin-top: 2rem;">
        <div style="color: #c1fffe">CHOOSE YOUR</div>
        <div style="color: #ff51fa">BATTLEGROUND</div>
    </div>


    <div class="main-input-box" style="margin-top: 4rem;">

        <div class="gradient"></div>

        <div class="input-row">

            <div class="flex-col-05" style="width: 17rem;">
                <div class="input-label-txt" style="color: #c1fffeb2;"> COMBATANT ALIAS </div>
                <div class="input-box">
                    <img src="fingerprint.svg" alt="" />
                    <input type="text" placeholder="NEURAL_STRIKER_01"/>
                </div>
            </div>


            <div class="flex-col-05" style="width: 14rem;">
                <div class="input-label-txt" style="color: #ff51fab2;"> SECURE LINK CODE </div>
                <div class="input-box">
                    <img src="phone.svg" alt="" />
                    <input type="text" placeholder="6 DIGIT ROOM CODE" />
                </div>
            </div>

            <button class="join-btn">JOIN ARENA</button>

        </div>

        <div class="info-msg"> Initialize neural uplink protocol \u2022 Secure connection required </div>

    </div>


    <div class="room-grid" style="margin-top: 4rem;">

        @for(item of roomTypes; track item.id){

            <div class="room-item" [class]="{'hardcore-room': item.id=='hardcore-mode' }">
                <img class="room-icon" [src]="item.icon" />
                <div class="room-title"> {{ item.title }} </div>
                <div class="room-description"> {{ item.description }} </div>
                <button [class]="{'room-btn': item.id!='hardcore-mode', 'hard-core-btn': item.id=='hardcore-mode' }"> 
                    @if(item.id=='hardcore-mode'){ ENTER IF YOU DARE }@else { ENTER }
                </button>
            </div>

        }

    </div>


    <div class="info-container" style="margin-top: 4rem; margin-bottom: 10rem;">

        <div class="header">
            <div class="header-main-txt">  SYSTEM INTELLIGENCE </div>
            <div class="divider"></div>
            <div class="subheader"> Neural Network Architecture & Performance Core </div>
        </div>

        <div class="info-grid">

            @for(item of infoCards; track item.id){

                <div class="info-card" [class]="'theme-' + item.theme">

                    <!-- Background gradient overlay -->
                    <div class="badge-overlay"></div>

                    <!-- Content wrapper -->
                    <div style="position: relative; z-index: 1; display: flex; gap: 1.5rem;">

                        <!-- Icon -->
                        <img [src]="item.icon" class="badge-icon" />

                        <!-- Content -->
                        <div style="display: flex; flex-direction: column; gap: 0.75rem; flex: 1;">

                            <!-- Title -->
                            <div class="badge-title">
                                {{ item.title }}
                            </div>

                            <!-- Description with highlights -->
                            <div class="badge-description">
                                @if(item.descriptionHighlight){
                                    @for(part of item.descriptionHighlight; track $index){
                                        @if(part.highlight){
                                            <span style="font-weight: 600;" [style]="{ 'color': part.color }" >{{ part.text }}</span>
                                        }@else{
                                            <span>{{ part.text }}</span>
                                        }
                                    }
                                }@else{
                                    {{ item.description }}
                                }
                            </div>

                            <!-- Badges -->
                            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.5rem;">
                                @for(badge of item.badges; track badge.label){
                                    <div [class]="'badge badge-' + badge.variant">
                                        {{ badge.label }}
                                    </div>
                                }
                            </div>

                        </div>

                    </div>

                </div>

            }

        </div>

    </div>


</div>
`, styles: ['/* src/app/landing-page/landing-page.component.scss */\n.brainimg {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 50%;\n  height: 50%;\n  object-fit: cover;\n  opacity: 0.4;\n  pointer-events: none;\n  z-index: 0;\n}\n.main-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: fit-content;\n  width: 100%;\n}\n.main-text {\n  text-shadow: 0px 0px 15px rgba(0, 255, 255, 0.6);\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  white-space: nowrap;\n  color: transparent;\n  font-size: 4.5rem;\n  text-align: center;\n  line-height: 4.5rem;\n}\n.main-input-box {\n  display: flex;\n  flex-direction: column;\n  width: 55%;\n  align-items: flex-start;\n  gap: 1.5rem;\n  padding: 2rem;\n  position: relative;\n  background-color: rgba(28, 29, 55, 0.6);\n  border-radius: 1rem;\n  overflow: hidden;\n  border: 1px solid;\n  border-color: rgba(69, 70, 92, 0.2980392157);\n}\n.main-input-box .gradient {\n  position: absolute;\n  height: calc(100% - 2px);\n  top: 1px;\n  left: 1px;\n  width: 4px;\n  background:\n    linear-gradient(\n      180deg,\n      rgb(193, 255, 254) 0%,\n      rgb(255, 81, 250) 100%);\n}\n.main-input-box .input-row {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.main-input-box .input-label-txt {\n  display: flex;\n  align-items: center;\n  font-family: "Manrope", Helvetica;\n  font-weight: 800;\n  font-size: 10px;\n  letter-spacing: 2px;\n  line-height: 15px;\n  white-space: nowrap;\n}\n.main-input-box .input-box {\n  display: flex;\n  background: #000000;\n  gap: 0.5rem;\n  background: #000000;\n  padding: 1rem;\n  border-radius: 0.5rem;\n}\n.main-input-box .input-box input {\n  border: none;\n  outline: none;\n  width: 100%;\n  color: #E4E3FE;\n  font-weight: 700;\n  background: #000000;\n}\n.main-input-box .join-btn {\n  display: flex;\n  height: 3.5rem;\n  width: 8rem;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 0;\n  position: relative;\n  border-radius: 0.5rem;\n  background:\n    linear-gradient(\n      90deg,\n      rgb(193, 255, 254) 0%,\n      rgb(0, 255, 255) 100%);\n  box-shadow: 0px 4px 6px -4px rgba(193, 255, 254, 0.2), 0px 10px 15px -3px rgba(193, 255, 254, 0.2);\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #006767;\n  font-size: 0.75rem;\n  text-align: center;\n  letter-spacing: 1.5px;\n  line-height: 20px;\n  white-space: nowrap;\n}\n.main-input-box .info-msg {\n  text-align: center;\n  font-size: 0.75rem;\n  color: #a9a9c3;\n  opacity: 0.5;\n  white-space: nowrap;\n  letter-spacing: 1px;\n  line-height: 1rem;\n  font-family: "Manrope", Helvetica;\n  align-self: center;\n}\n.room-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 1.5rem;\n  width: 70%;\n  z-index: 1;\n}\n.room-grid .room-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  background-color: rgba(28, 29, 55, 0.6);\n  border-radius: 1rem;\n  overflow: hidden;\n  border: 1px solid;\n  border-color: rgba(69, 70, 92, 0.2980392157);\n  padding: 1rem;\n}\n.room-grid .room-icon {\n  width: 3rem;\n}\n.room-grid .room-title {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #E4E3FE;\n  font-size: 1.125rem;\n  letter-spacing: 0;\n  line-height: 1.75rem;\n}\n.room-grid .room-description {\n  font-family: "Manrope", Helvetica;\n  font-weight: 400;\n  color: #a9a9c3;\n  opacity: 0.5;\n  font-size: 0.75rem;\n  letter-spacing: 0;\n  line-height: 1rem;\n}\n.room-grid .room-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.85rem 0;\n  background-color: #22233f;\n  border-radius: 0.75rem;\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #e4e3fe;\n  text-align: center;\n  border: 1px solid rgba(193, 255, 254, 0.2);\n  margin-top: auto;\n}\n.room-grid .hardcore-room {\n  position: relative;\n  overflow: hidden;\n  border-color: #ff716c !important;\n  animation: pulseDanger 1.5s infinite;\n}\n.room-grid .hardcore-room .room-title {\n  color: #ff716c !important;\n}\n.room-grid .hardcore-room .hard-core-btn {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.85rem 0;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(193, 255, 254, 0.2);\n  margin-top: auto;\n  color: white;\n  font-weight: 700;\n  background: #111;\n}\n.room-grid .hardcore-room .hard-core-btn::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 113, 108, 0.9),\n      rgba(215, 56, 59, 0.9));\n  opacity: 0.85;\n  z-index: 0;\n}\n.room-grid .hardcore-room .hard-core-btn span {\n  position: relative;\n  z-index: 1;\n}\n.room-grid .hardcore-room::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 113, 108, 0.18),\n      rgba(215, 56, 59, 0.18));\n  z-index: 0;\n  pointer-events: none;\n}\n.room-grid .hardcore-room > * {\n  position: relative;\n  z-index: 1;\n}\n@keyframes pulseDanger {\n  0% {\n    box-shadow: 0 0 0px rgba(255, 113, 108, 0.2);\n  }\n  50% {\n    box-shadow: 0 0 25px rgba(255, 113, 108, 0.35);\n  }\n  100% {\n    box-shadow: 0 0 0px rgba(255, 113, 108, 0.2);\n  }\n}\n.room-item {\n  transition: transform 0.25s ease, box-shadow 0.25s ease;\n}\n.room-item:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);\n}\n.main-input-box::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      120deg,\n      transparent 40%,\n      rgba(193, 255, 254, 0.08) 50%,\n      transparent 60%);\n  animation: scan 3s linear infinite;\n}\n@keyframes scan {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n.info-container .header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.info-container .header .header-main-txt {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #c1fffe;\n  font-size: 2.25rem;\n  letter-spacing: 0;\n  line-height: 2rem;\n}\n.info-container .header .divider {\n  height: 4px;\n  width: 80%;\n  margin: 1rem 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(193, 255, 254, 0) 0%,\n      rgb(193, 255, 254) 50%,\n      rgba(193, 255, 254, 0) 100%);\n}\n.info-container .header .subheader {\n  font-family: "Manrope", Helvetica;\n  font-weight: 400;\n  color: #a9a9c3;\n  opacity: 0.5;\n  font-size: 0.875rem;\n  letter-spacing: 1px;\n  line-height: 1.25rem;\n}\n.info-grid {\n  margin-top: 3rem;\n  margin-left: 5rem;\n  margin-right: 5rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n  z-index: 1;\n}\n@media (max-width: 1024px) {\n  .info-grid {\n    grid-template-columns: 1fr;\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .info-grid {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    gap: 1rem;\n  }\n}\n.info-card {\n  background-color: rgba(28, 29, 55, 0.6);\n  border-radius: 1rem;\n  border: 1px solid rgba(69, 70, 92, 0.2980392157);\n  padding: 1.5rem;\n  overflow: hidden;\n  position: relative;\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n}\n.info-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);\n}\n@media (max-width: 768px) {\n  .info-card {\n    padding: 1.25rem;\n  }\n}\n.info-card.theme-cyan {\n  border-color: rgba(69, 70, 92, 0.4);\n}\n.info-card.theme-cyan:hover {\n  border-color: rgba(193, 255, 254, 0.3);\n}\n.info-card.theme-cyan .badge-overlay {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(193, 255, 254, 0.08) 0%,\n      rgba(0, 255, 255, 0.05) 100%);\n}\n.info-card.theme-cyan .badge-title {\n  text-shadow: 0 0 10px rgba(193, 255, 254, 0.3);\n}\n.info-card.theme-magenta {\n  border-color: rgba(255, 81, 250, 0.3);\n  background: rgba(75, 35, 85, 0.4);\n}\n.info-card.theme-magenta:hover {\n  border-color: rgba(255, 81, 250, 0.5);\n  box-shadow: 0 15px 40px rgba(255, 81, 250, 0.15);\n}\n.info-card.theme-magenta .badge-overlay {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 81, 250, 0.1) 0%,\n      rgba(150, 50, 200, 0.05) 100%);\n}\n.info-card.theme-magenta .badge-title {\n  text-shadow: 0 0 10px rgba(255, 81, 250, 0.3);\n}\n.info-card.theme-yellow {\n  border-color: rgba(255, 255, 0, 0.2);\n  background: rgba(50, 50, 20, 0.4);\n}\n.info-card.theme-yellow:hover {\n  border-color: rgba(255, 255, 0, 0.4);\n  box-shadow: 0 15px 40px rgba(255, 255, 0, 0.1);\n}\n.info-card.theme-yellow .badge-overlay {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 0, 0.08) 0%,\n      rgba(255, 150, 0, 0.05) 100%);\n}\n.info-card.theme-yellow .badge-title {\n  text-shadow: 0 0 10px rgba(255, 255, 0, 0.3);\n}\n.badge-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(193, 255, 254, 0.05) 0%,\n      rgba(193, 255, 254, 0.02) 100%);\n  pointer-events: none;\n}\n.badge-icon {\n  width: 4rem;\n  height: 4rem;\n  flex-shrink: 0;\n  object-fit: contain;\n}\n@media (max-width: 768px) {\n  .badge-icon {\n    width: 3rem;\n    height: 3rem;\n  }\n}\n.badge-title {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #e4e3fe;\n  font-size: 1.125rem;\n  line-height: 1.25rem;\n  letter-spacing: 0;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .badge-title {\n    font-size: 1rem;\n  }\n}\n.badge-description {\n  font-family: "Manrope", Helvetica;\n  font-weight: 400;\n  color: #a9a9c3;\n  opacity: 0.6;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .badge-description {\n    font-size: 0.8125rem;\n    line-height: 1.15rem;\n  }\n}\n.badge-description span {\n  display: inline;\n  font-weight: inherit;\n  color: inherit;\n}\n.badge {\n  display: inline-block;\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 600;\n  font-size: 0.625rem;\n  letter-spacing: 1px;\n  padding: 0.5rem 0.85rem;\n  border-radius: 0.375rem;\n  text-transform: uppercase;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .badge {\n    font-size: 0.5rem;\n    padding: 0.4rem 0.65rem;\n  }\n}\n.badge-default {\n  color: #c1fffe;\n  border: 1px solid rgba(193, 255, 254, 0.4);\n  background: rgba(193, 255, 254, 0.08);\n}\n.badge-default:hover {\n  border-color: #c1fffe;\n  background: rgba(193, 255, 254, 0.15);\n  box-shadow: 0 0 12px rgba(193, 255, 254, 0.2);\n}\n.badge-accent {\n  color: #ff51fa;\n  border: 1px solid rgba(255, 81, 250, 0.4);\n  background: rgba(255, 81, 250, 0.08);\n}\n.badge-accent:hover {\n  border-color: #ff51fa;\n  background: rgba(255, 81, 250, 0.15);\n  box-shadow: 0 0 12px rgba(255, 81, 250, 0.2);\n}\n@media (max-width: 1024px) {\n  .info-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .info-grid {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  .info-card {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=landing-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(LandingPageComponent, { className: "LandingPageComponent", filePath: "src/app/landing-page/landing-page.component.ts", lineNumber: 8 });
})();
(() => {
  const id = "src%2Fapp%2Flanding-page%2Flanding-page.component.ts%40LandingPageComponent";
  function LandingPageComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(LandingPageComponent, m.default, [i0], [Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LandingPageComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LandingPageComponent_HmrLoad(d.timestamp)));
})();

// src/app/lobby/lobby.component.ts
import { Component as Component2 } from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_core.js?v=f25d82a0";
import * as i02 from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_core.js?v=f25d82a0";
var LobbyComponent = class _LobbyComponent {
  static \u0275fac = function LobbyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LobbyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _LobbyComponent, selectors: [["app-lobby"]], decls: 35, vars: 0, consts: [[1, "lobby-main-container"], [1, "main-content-container"], [2, "display", "flex", "justify-content", "space-between"], [2, "display", "flex", "flex-direction", "column", "gap", "1rem"], [1, "flex-row"], [1, "blue-ball"], [1, "light-blue"], [2, "display", "flex", "flex-direction", "column", "gap", "0"], [1, "synching"], [1, "network"], [1, "grey-text"], [1, "roomid-box", "trans-box"], [1, "roomid"], ["src", "roomid-icon.svg", "alt", "", 1, "roomicon"], [1, "neural-cap-container", "trans-box"], [1, "slot-circle"], [1, "current"], [1, "total"], [1, "header"], [1, "subheader"]], template: function LobbyComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      i02.\u0275\u0275element(5, "div", 5);
      i02.\u0275\u0275elementStart(6, "div", 6);
      i02.\u0275\u0275text(7, " STATUS : MATCHING ");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
      i02.\u0275\u0275text(10, " SYNCING ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(11, "br");
      i02.\u0275\u0275elementStart(12, "div", 9);
      i02.\u0275\u0275text(13, " NEURAL ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(14, "br");
      i02.\u0275\u0275elementStart(15, "div", 9);
      i02.\u0275\u0275text(16, " NETWORKS ");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(17, "div", 4)(18, "div", 10);
      i02.\u0275\u0275text(19, " ENCRYPTED ROOM ID : ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(20, "div", 11)(21, "div", 12);
      i02.\u0275\u0275text(22, " #482-910 ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(23, "img", 13);
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "div", 16);
      i02.\u0275\u0275text(27, "7");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(28, "div", 17);
      i02.\u0275\u0275text(29, "/10");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(30, "div", 3)(31, "div", 18);
      i02.\u0275\u0275text(32, " Neural Capacity ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(33, "div", 19);
      i02.\u0275\u0275text(34, " 3 Slots remaining for link stability ");
      i02.\u0275\u0275elementEnd()()()()()();
    }
  }, styles: ['\n\n*[_ngcontent-%COMP%] {\n  color: white;\n}\n.lobby-main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin: 3rem auto;\n  width: 90%;\n}\n.main-content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n}\n.neural-cap-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  justify-content: space-around;\n  align-self: end;\n  align-items: center;\n  padding: 1.5rem 2.5rem !important;\n}\n.neural-cap-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #e4e3fe;\n  font-size: 1.25rem;\n  white-space: nowrap;\n  letter-spacing: 1.2px;\n  line-height: 1rem;\n  text-transform: uppercase;\n}\n.neural-cap-container[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%] {\n  font-family: "Manrope", Helvetica;\n  font-weight: 500;\n  color: #a9a9c3;\n  font-size: 1rem;\n  white-space: nowrap;\n  letter-spacing: 0;\n  line-height: 1rem;\n}\n.neural-cap-container[_ngcontent-%COMP%]   .slot-circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 9999px;\n  background:\n    radial-gradient(\n      50% 50% at 50% 50%,\n      rgb(11, 12, 31) 79%,\n      rgba(11, 12, 31, 0) 80%,\n      rgb(11, 12, 31) 100%);\n  height: 5rem;\n  width: 5rem;\n  border: none;\n}\n.neural-cap-container[_ngcontent-%COMP%]   .slot-circle[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #c1fffe;\n  font-size: 1.5rem;\n}\n.neural-cap-container[_ngcontent-%COMP%]   .slot-circle[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-family: "Manrope", Helvetica;\n  font-weight: 500;\n  color: rgba(169, 169, 195, 0.6);\n  font-size: 1rem;\n}\n.light-blue[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #c1fffe;\n  font-size: 0.85rem;\n  white-space: nowrap;\n  letter-spacing: 3px;\n  line-height: 1rem;\n}\n.blue-ball[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  width: 0.5rem;\n  background-color: #00e6e6;\n  border-radius: 9999px;\n}\n.synching[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #e4e3fe;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  letter-spacing: -3px;\n  line-height: 3rem;\n  font-size: 4rem;\n}\n.network[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  letter-spacing: -3px;\n  line-height: 3rem;\n  font-size: 4rem;\n  background:\n    linear-gradient(\n      17deg,\n      rgb(193, 255, 254) 0%,\n      rgb(0, 255, 255) 100%);\n  -webkit-background-clip: text !important;\n  background-clip: text;\n  -webkit-text-fill-color: transparent !important;\n  color: transparent !important;\n}\n.grey-text[_ngcontent-%COMP%] {\n  font-family: "Manrope", Helvetica;\n  font-weight: 700;\n  color: #a9a9c3;\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.trans-box[_ngcontent-%COMP%] {\n  background-color: #1c1d37;\n  padding: 0.5rem 1rem;\n  border: 2px solid rgba(69, 70, 92, 0.2);\n  border-radius: 0.5rem;\n}\n.roomid-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.roomid-box[_ngcontent-%COMP%]   .roomid[_ngcontent-%COMP%] {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #00f5f5;\n  font-size: 1.05rem;\n  white-space: nowrap;\n  letter-spacing: 1.5px;\n  line-height: 1.25rem;\n}\n.roomid-box[_ngcontent-%COMP%]   .roomicon[_ngcontent-%COMP%] {\n  height: 1.05rem;\n  width: 1.05rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=lobby.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(LobbyComponent, [{
    type: Component2,
    args: [{ selector: "app-lobby", imports: [], template: '\n<div class="lobby-main-container">\n\n    <!-- LEFT PART OF SCREEN -->\n    <div class="main-content-container">\n\n        <div style="display:flex;justify-content:space-between;">\n\n            <div style="display:flex;flex-direction: column; gap: 1rem;">\n                <div class="flex-row">\n                    <div class="blue-ball"></div>\n                    <div class="light-blue"> STATUS : MATCHING </div>\n                </div>\n                <div style="display:flex;flex-direction: column;gap:0;"> \n                    <div class="synching"> SYNCING </div> <br> \n                    <div class="network"> NEURAL </div> <br> \n                    <div class="network"> NETWORKS </div> \n                </div>\n                <div class="flex-row">\n                    <div class="grey-text"> ENCRYPTED ROOM ID : </div>\n                    <div class="roomid-box trans-box"> \n                        <div class="roomid"> #482-910 </div>\n                        <img class="roomicon" src="roomid-icon.svg" alt=""/> \n                    </div>\n                </div>\n            </div>\n\n            <div class="neural-cap-container trans-box"> \n                <div class="slot-circle">\n                    <div class="current">7</div>\n                    <div class="total">/10</div>\n                </div>\n                <div style="display:flex;flex-direction: column;gap:1rem;"> \n                    <div class="header"> Neural Capacity </div>\n                    <div class="subheader"> 3 Slots remaining for link stability </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n\n</div>\n\n', styles: ['/* src/app/lobby/lobby.component.scss */\n* {\n  color: white;\n}\n.lobby-main-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin: 3rem auto;\n  width: 90%;\n}\n.main-content-container {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n}\n.neural-cap-container {\n  display: flex;\n  gap: 2rem;\n  justify-content: space-around;\n  align-self: end;\n  align-items: center;\n  padding: 1.5rem 2.5rem !important;\n}\n.neural-cap-container .header {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #e4e3fe;\n  font-size: 1.25rem;\n  white-space: nowrap;\n  letter-spacing: 1.2px;\n  line-height: 1rem;\n  text-transform: uppercase;\n}\n.neural-cap-container .subheader {\n  font-family: "Manrope", Helvetica;\n  font-weight: 500;\n  color: #a9a9c3;\n  font-size: 1rem;\n  white-space: nowrap;\n  letter-spacing: 0;\n  line-height: 1rem;\n}\n.neural-cap-container .slot-circle {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 9999px;\n  background:\n    radial-gradient(\n      50% 50% at 50% 50%,\n      rgb(11, 12, 31) 79%,\n      rgba(11, 12, 31, 0) 80%,\n      rgb(11, 12, 31) 100%);\n  height: 5rem;\n  width: 5rem;\n  border: none;\n}\n.neural-cap-container .slot-circle .current {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #c1fffe;\n  font-size: 1.5rem;\n}\n.neural-cap-container .slot-circle .total {\n  font-family: "Manrope", Helvetica;\n  font-weight: 500;\n  color: rgba(169, 169, 195, 0.6);\n  font-size: 1rem;\n}\n.light-blue {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #c1fffe;\n  font-size: 0.85rem;\n  white-space: nowrap;\n  letter-spacing: 3px;\n  line-height: 1rem;\n}\n.blue-ball {\n  height: 0.5rem;\n  width: 0.5rem;\n  background-color: #00e6e6;\n  border-radius: 9999px;\n}\n.synching {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #e4e3fe;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  letter-spacing: -3px;\n  line-height: 3rem;\n  font-size: 4rem;\n}\n.network {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  letter-spacing: -3px;\n  line-height: 3rem;\n  font-size: 4rem;\n  background:\n    linear-gradient(\n      17deg,\n      rgb(193, 255, 254) 0%,\n      rgb(0, 255, 255) 100%);\n  -webkit-background-clip: text !important;\n  background-clip: text;\n  -webkit-text-fill-color: transparent !important;\n  color: transparent !important;\n}\n.grey-text {\n  font-family: "Manrope", Helvetica;\n  font-weight: 700;\n  color: #a9a9c3;\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.trans-box {\n  background-color: #1c1d37;\n  padding: 0.5rem 1rem;\n  border: 2px solid rgba(69, 70, 92, 0.2);\n  border-radius: 0.5rem;\n}\n.roomid-box {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n.roomid-box .roomid {\n  font-family: "Space Grotesk", Helvetica;\n  font-weight: 700;\n  color: #00f5f5;\n  font-size: 1.05rem;\n  white-space: nowrap;\n  letter-spacing: 1.5px;\n  line-height: 1.25rem;\n}\n.roomid-box .roomicon {\n  height: 1.05rem;\n  width: 1.05rem;\n  cursor: pointer;\n}\n/*# sourceMappingURL=lobby.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(LobbyComponent, { className: "LobbyComponent", filePath: "src/app/lobby/lobby.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Flobby%2Flobby.component.ts%40LobbyComponent";
  function LobbyComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(LobbyComponent, m.default, [i02], [Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LobbyComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LobbyComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "lobby",
    component: LobbyComponent
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

// src/app/app.component.ts
import { Component as Component3 } from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_core.js?v=f25d82a0";
import { RouterOutlet } from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_router.js?v=f25d82a0";
import * as i03 from "/@fs/Users/deepeshdm/Desktop/NeuroArena/.angular/cache/19.2.23/neuroarena-ui/vite/deps/@angular_core.js?v=f25d82a0";
var AppComponent = class _AppComponent {
  title = "neuroarena-ui";
  openGithub() {
    window.open("https://github.com/deepeshdm/NeuroArena", "_blank");
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "app-header"], [2, "display", "flex", "justify-content", "space-between", "width", "100%"], [1, "header-title", 3, "click"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      i03.\u0275\u0275listener("click", function AppComponent_Template_div_click_2_listener() {
        return ctx.openGithub();
      });
      i03.\u0275\u0275text(3, " NeuroArena ");
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275element(4, "router-outlet");
    }
  }, dependencies: [RouterOutlet], styles: ['\n\n.app-header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 99%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 32px;\n  position: relative;\n  background:\n    linear-gradient(\n      to bottom right,\n      #15162d,\n      #0b0c1f);\n}\n.app-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 123.27px;\n  height: 32px;\n  margin-top: -1px;\n  font-family: "Space Grotesk-Bold", Helvetica;\n  font-weight: 700;\n  color: #c1fffe;\n  font-size: 24px;\n  letter-spacing: -1.2px;\n  line-height: 32px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n/*# sourceMappingURL=app.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(AppComponent, [{
    type: Component3,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: '\n\n<div class="app-header">\n  <div style="display: flex; justify-content: space-between; width: 100%;">\n    <div class="header-title" (click)="openGithub()"> NeuroArena </div>\n  </div>\n</div>\n\n<router-outlet />\n', styles: ['/* src/app/app.component.scss */\n.app-header {\n  display: flex;\n  width: 99%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 32px;\n  position: relative;\n  background:\n    linear-gradient(\n      to bottom right,\n      #15162d,\n      #0b0c1f);\n}\n.app-header .header-title {\n  display: flex;\n  align-items: center;\n  width: 123.27px;\n  height: 32px;\n  margin-top: -1px;\n  font-family: "Space Grotesk-Bold", Helvetica;\n  font-weight: 700;\n  color: #c1fffe;\n  font-size: 24px;\n  letter-spacing: -1.2px;\n  line-height: 32px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.component.ts%40AppComponent";
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(AppComponent, m.default, [i03], [RouterOutlet, Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppComponent_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC50cyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvbG9iYnkvbG9iYnkuY29tcG9uZW50LnRzIiwic3JjL2FwcC9sb2JieS9sb2JieS5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvYXBwLnJvdXRlcy50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2FwcC5jb21wb25lbnQnO1xuXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIGFwcENvbmZpZylcbiAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZywgcHJvdmlkZVpvbmVDaGFuZ2VEZXRlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuXG5leHBvcnQgY29uc3QgYXBwQ29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyA9IHtcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZVpvbmVDaGFuZ2VEZXRlY3Rpb24oeyBldmVudENvYWxlc2Npbmc6IHRydWUgfSksIHByb3ZpZGVSb3V0ZXIocm91dGVzKV1cbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxhbmRpbmctcGFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYW5kaW5nLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBMYW5kaW5nUGFnZUNvbXBvbmVudCB7XG5cbiAgIHJvb21UeXBlcyA9IFtcbiAgICB7XG4gICAgICBcImlkXCI6IFwibWl4ZWQtYmFnXCIsXG4gICAgICBcInRpdGxlXCI6IFwiTWl4ZWQgQmFnXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQSBjaGFvdGljIHN3aXJsIG9mIGV2ZXJ5IHRvcGljLiBQZXJmZWN0IGZvciB0aGUgdWx0aW1hdGUgZ2VuZXJhbGlzdC5cIixcbiAgICAgIFwiaWNvblwiOiBcIm1peGVkLWJhZy5zdmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcInNjaWVuY2UtdGVjaFwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlNjaWVuY2UgJiBUZWNoXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUXVhbnR1bSBwaHlzaWNzIHRvIEphdmFzY3JpcHQgZnJhbWV3b3Jrcy4gTm90IGZvciB0aGUgZmFpbnQgb2YgaGVhcnQuXCIsXG4gICAgICBcImljb25cIjogXCJzY2llbmNlLXRlY2guc3ZnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJoaXN0b3J5LWN1bHR1cmVcIixcbiAgICAgIFwidGl0bGVcIjogXCJIaXN0b3J5ICYgQ3VsdHVyZVwiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlVuY292ZXIgdGhlIHNlY3JldHMgb2YgY2l2aWxpemF0aW9ucyBhbmQgYXJ0aXN0aWMgcmV2b2x1dGlvbnMuXCIsXG4gICAgICBcImljb25cIjogXCJoaXN0b3J5LWN1bHR1cmUuc3ZnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJwb3AtY3VsdHVyZVwiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlBvcCBDdWx0dXJlXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTW92aWVzLCBtdXNpYywgYW5kIHRoZSBkaWdpdGFsIHplaXRnZWlzdC4gU3RheSByZWxldmFudC5cIixcbiAgICAgIFwiaWNvblwiOiBcInBvcC1jdWx0dXJlLnN2Z1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IFwiYnJhaW4tdGVhc2Vyc1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkJyYWluIFRlYXNlcnNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb2dpYyBwdXp6bGVzIGFuZCBsYXRlcmFsIHRoaW5raW5nIGNoYWxsZW5nZXMuIFNoYXJwZW4geW91ciBtaW5kLlwiLFxuICAgICAgXCJpY29uXCI6IFwiYnJhaW4tdGVhc2Vycy5zdmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcImhhcmRjb3JlLW1vZGVcIixcbiAgICAgIFwidGl0bGVcIjogXCJIYXJkY29yZSBNb2RlXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT25lIHdyb25nIGFuc3dlciBhbmQgeW91J3JlIG91dC4gTWF4aW11bSBwcmVzc3VyZS5cIixcbiAgICAgIFwiaWNvblwiOiBcImhhcmRjb3JlLW1vZGUuc3ZnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogXCJnYW1pbmctZXNwb3J0c1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIkdhbWluZyAmIEVzcG9ydHNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGcm9tIDgtYml0IGNsYXNzaWNzIHRvIHRoZSBsYXRlc3QgZ2xvYmFsIHRvdXJuYW1lbnQgbWV0YXMuXCIsXG4gICAgICBcImljb25cIjogXCJnYW1pbmctZXNwb3J0cy5zdmdcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiBcInNwb3J0c1wiLFxuICAgICAgXCJ0aXRsZVwiOiBcIlNwb3J0c1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBwaHlzaWNzIG9mIHRoZSBmaWVsZCBhbmQgdGhlIGhpc3Rvcnkgb2YgY2hhbXBpb25zLlwiLFxuICAgICAgXCJpY29uXCI6IFwic3BvcnRzLnN2Z1wiXG4gICAgfVxuICBdO1xuXG5cbiAgaW5mb0NhcmRzID0gW1xuICB7XG4gICAgXCJpZFwiOiBcInJlYWwtdGltZS1iYXR0bGVzXCIsXG4gICAgXCJpY29uXCI6IFwicGxheWVycy5zdmdcIixcbiAgICBcInRpdGxlXCI6IFwiUkVBTC1USU1FIFFVSVogQkFUVExFU1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXBsb3kgeW91ciBrbm93bGVkZ2UgaW4gaGlnaC12ZWxvY2l0eSBhcmVuYSBtYXRjaGVzLiBDb21wZXRlIHdpdGggdXAgdG8gMTAgcGxheWVycyBzaW11bHRhbmVvdXNseSB3aGVyZSBldmVyeSBtaWxsaXNlY29uZCBjb3VudHMuIE91ciB1bmlxdWUgc3BlZWQtYmFzZWQgc2NvcmluZyBhbGdvcml0aG0gcmV3YXJkcyBib3RoIGFjY3VyYWN5IGFuZCByYXBpZCBuZXVyYWwgZmlyaW5nLlwiLFxuICAgIFwiZGVzY3JpcHRpb25IaWdobGlnaHRcIjogW1xuICAgICAgeyBcInRleHRcIjogXCJEZXBsb3kgeW91ciBrbm93bGVkZ2UgaW4gaGlnaC12ZWxvY2l0eSBhcmVuYSBtYXRjaGVzLiBDb21wZXRlIHdpdGggdXAgdG8gXCIsIFwiaGlnaGxpZ2h0XCI6IGZhbHNlIH0sXG4gICAgICB7IFwidGV4dFwiOiBcIjEwIHBsYXllcnMgc2ltdWx0YW5lb3VzbHlcIiwgXCJoaWdobGlnaHRcIjogdHJ1ZSwgXCJjb2xvclwiOiBcIiNjMWZmZmVcIiB9LFxuICAgICAgeyBcInRleHRcIjogXCIgd2hlcmUgZXZlcnkgbWlsbGlzZWNvbmQgY291bnRzLiBPdXIgdW5pcXVlIFwiLCBcImhpZ2hsaWdodFwiOiBmYWxzZSB9LFxuICAgICAgeyBcInRleHRcIjogXCJzcGVlZC1iYXNlZCBzY29yaW5nXCIsIFwiaGlnaGxpZ2h0XCI6IHRydWUsIFwiY29sb3JcIjogXCIjYzFmZmZlXCIgfSxcbiAgICAgIHsgXCJ0ZXh0XCI6IFwiIGFsZ29yaXRobSByZXdhcmRzIGJvdGggYWNjdXJhY3kgYW5kIHJhcGlkIG5ldXJhbCBmaXJpbmcuXCIsIFwiaGlnaGxpZ2h0XCI6IGZhbHNlIH1cbiAgICBdLFxuICAgIFwidGhlbWVcIjogXCJjeWFuXCIsXG4gICAgXCJiYWRnZXNcIjogW1xuICAgICAgeyBcImxhYmVsXCI6IFwiMTAgUExBWUVSU1wiLCBcInZhcmlhbnRcIjogXCJkZWZhdWx0XCIgfSxcbiAgICAgIHsgXCJsYWJlbFwiOiBcIkxPVyBMQVRFTkNZXCIsIFwidmFyaWFudFwiOiBcImFjY2VudFwiIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaW5zdGFudC1wbGF5XCIsXG4gICAgXCJpY29uXCI6IFwibGlnaHRuaW5nLnN2Z1wiLFxuICAgIFwidGl0bGVcIjogXCJJTlNUQU5UIFBMQVlcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiRnJpY3Rpb25sZXNzIGVudHJ5IGludG8gdGhlIG1hdHJpeC4gRXhwZXJpZW5jZSBvdXIgemVyby1zaWdudXAgZmxvd+KAlHNpbXBseSBkZXNpZ25hdGUgYW4gYWxpYXMgYW5kIGNvbm5lY3QgdG8gYSBuZXVyYWwgdXBsaW5rIGltbWVkaWF0ZWx5LiBObyBmb3Jtcywgbm8gZGVsYXlzLCBqdXN0IHB1cmUgY29tcGV0aXRpdmUgaW50ZWxsZWN0LlwiLFxuICAgIFwiZGVzY3JpcHRpb25IaWdobGlnaHRcIjogW1xuICAgICAgeyBcInRleHRcIjogXCJGcmljdGlvbmxlc3MgZW50cnkgaW50byB0aGUgbWF0cml4LiBFeHBlcmllbmNlIG91ciBcIiwgXCJoaWdobGlnaHRcIjogZmFsc2UgfSxcbiAgICAgIHsgXCJ0ZXh0XCI6IFwiemVyby1zaWdudXAgZmxvd1wiLCBcImhpZ2hsaWdodFwiOiB0cnVlLCBcImNvbG9yXCI6IFwiI2ZmNTFmYVwiIH0sXG4gICAgICB7IFwidGV4dFwiOiBcIuKAlHNpbXBseSBkZXNpZ25hdGUgYW4gYWxpYXMgYW5kIFwiLCBcImhpZ2hsaWdodFwiOiBmYWxzZSB9LFxuICAgICAgeyBcInRleHRcIjogXCJjb25uZWN0IHRvIGEgbmV1cmFsIHVwbGluayBpbW1lZGlhdGVseVwiLCBcImhpZ2hsaWdodFwiOiB0cnVlLCBcImNvbG9yXCI6IFwiI2ZmNTFmYVwiIH0sXG4gICAgICB7IFwidGV4dFwiOiBcIi4gTm8gZm9ybXMsIG5vIGRlbGF5cywganVzdCBwdXJlIGNvbXBldGl0aXZlIGludGVsbGVjdC5cIiwgXCJoaWdobGlnaHRcIjogZmFsc2UgfVxuICAgIF0sXG4gICAgXCJ0aGVtZVwiOiBcIm1hZ2VudGFcIixcbiAgICBcImJhZGdlc1wiOiBbXG4gICAgICB7IFwibGFiZWxcIjogXCJOTyBTSUdOVVBcIiwgXCJ2YXJpYW50XCI6IFwiZGVmYXVsdFwiIH0sXG4gICAgICB7IFwibGFiZWxcIjogXCJRVUlDSyBKT0lOXCIsIFwidmFyaWFudFwiOiBcImFjY2VudFwiIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZGl2ZXJzZS1hcmVuYXNcIixcbiAgICBcImljb25cIjogXCJncmlkLnN2Z1wiLFxuICAgIFwidGl0bGVcIjogXCJESVZFUlNFIEFSRU5BU1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYXN0ZXIgbXVsdGlwbGUgaW50ZWxsaWdlbmNlIGRvbWFpbnMuIENob29zZSBmcm9tIHNwZWNpYWxpemVkIGJhdHRsZWdyb3VuZHMgbGlrZSBCcmFpbiBUZWFzZXJzIGZvciBsb2dpYywgSGFyZGNvcmUgTW9kZSBmb3IgaGlnaC1zdGFrZXMgcHJlc3N1cmUsIG9yIHRhY3RpY2FsIHNjaWVuY2UgYW5kIGdhbWluZyBzZWN0b3JzLlwiLFxuICAgIFwiZGVzY3JpcHRpb25IaWdobGlnaHRcIjogW1xuICAgICAgeyBcInRleHRcIjogXCJNYXN0ZXIgbXVsdGlwbGUgaW50ZWxsaWdlbmNlIGRvbWFpbnMuIENob29zZSBmcm9tIHNwZWNpYWxpemVkIGJhdHRsZWdyb3VuZHMgbGlrZSBcIiwgXCJoaWdobGlnaHRcIjogZmFsc2UgfSxcbiAgICAgIHsgXCJ0ZXh0XCI6IFwiQnJhaW4gVGVhc2Vyc1wiLCBcImhpZ2hsaWdodFwiOiB0cnVlLCBcImNvbG9yXCI6IFwiI2ZmZmYwMFwiIH0sXG4gICAgICB7IFwidGV4dFwiOiBcIiBmb3IgbG9naWMsIFwiLCBcImhpZ2hsaWdodFwiOiBmYWxzZSB9LFxuICAgICAgeyBcInRleHRcIjogXCJIYXJkY29yZSBNb2RlXCIsIFwiaGlnaGxpZ2h0XCI6IHRydWUsIFwiY29sb3JcIjogXCIjZmY1NTU1XCIgfSxcbiAgICAgIHsgXCJ0ZXh0XCI6IFwiIGZvciBoaWdoLXN0YWtlcyBwcmVzc3VyZSwgb3IgdGFjdGljYWwgc2NpZW5jZSBhbmQgZ2FtaW5nIHNlY3RvcnMuXCIsIFwiaGlnaGxpZ2h0XCI6IGZhbHNlIH1cbiAgICBdLFxuICAgIFwidGhlbWVcIjogXCJ5ZWxsb3dcIixcbiAgICBcImJhZGdlc1wiOiBbXG4gICAgICB7IFwibGFiZWxcIjogXCI4KyBUSEVNRVNcIiwgXCJ2YXJpYW50XCI6IFwiZGVmYXVsdFwiIH0sXG4gICAgICB7IFwibGFiZWxcIjogXCJEQUlMWSBST1RBVElPTlwiLCBcInZhcmlhbnRcIjogXCJhY2NlbnRcIiB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImNvZ25pdGl2ZS1zbmFwc2hvdFwiLFxuICAgIFwiaWNvblwiOiBcInF1ZXN0aW9uLW1pbmQuc3ZnXCIsXG4gICAgXCJ0aXRsZVwiOiBcIkNPR05JVElWRSBTTkFQU0hPVFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJQb3N0LWJhdHRsZSBkaWFnbm9zdGljcyBmb3IgaGlnaC1wZXJmb3JtZXJzLiBSZWNlaXZlIGEgZGVlcCBuZXVyYWwgYW5hbHlzaXMgaW5jbHVkaW5nIG1ldHJpY3Mgb24gcmVzcG9uc2UgbGF0ZW5jeSwgbG9naWMgY29uc2lzdGVuY3ksIGFuZCBjYXRlZ29yeS1zcGVjaWZpYyBhY2N1cmFjeSB0byBzaGFycGVuIHlvdXIgY29tcGV0aXRpdmUgZWRnZS5cIixcbiAgICBcImRlc2NyaXB0aW9uSGlnaGxpZ2h0XCI6IFtcbiAgICAgIHsgXCJ0ZXh0XCI6IFwiUG9zdC1iYXR0bGUgZGlhZ25vc3RpY3MgZm9yIGhpZ2gtcGVyZm9ybWVycy4gUmVjZWl2ZSBhIGRlZXAgXCIsIFwiaGlnaGxpZ2h0XCI6IGZhbHNlIH0sXG4gICAgICB7IFwidGV4dFwiOiBcIm5ldXJhbCBhbmFseXNpc1wiLCBcImhpZ2hsaWdodFwiOiB0cnVlLCBcImNvbG9yXCI6IFwiI2MxZmZmZVwiIH0sXG4gICAgICB7IFwidGV4dFwiOiBcIiBpbmNsdWRpbmcgbWV0cmljcyBvbiBcIiwgXCJoaWdobGlnaHRcIjogZmFsc2UgfSxcbiAgICAgIHsgXCJ0ZXh0XCI6IFwicmVzcG9uc2UgbGF0ZW5jeSwgbG9naWMgY29uc2lzdGVuY3ksIGFuZCBjYXRlZ29yeS1zcGVjaWZpYyBhY2N1cmFjeVwiLCBcImhpZ2hsaWdodFwiOiB0cnVlLCBcImNvbG9yXCI6IFwiI2MxZmZmZVwiIH0sXG4gICAgICB7IFwidGV4dFwiOiBcIiB0byBzaGFycGVuIHlvdXIgY29tcGV0aXRpdmUgZWRnZS5cIiwgXCJoaWdobGlnaHRcIjogZmFsc2UgfVxuICAgIF0sXG4gICAgXCJ0aGVtZVwiOiBcImN5YW5cIixcbiAgICBcImJhZGdlc1wiOiBbXG4gICAgICB7IFwibGFiZWxcIjogXCJQRVJGT1JNQU5DRSBBSVwiLCBcInZhcmlhbnRcIjogXCJkZWZhdWx0XCIgfSxcbiAgICAgIHsgXCJsYWJlbFwiOiBcIlNUQVQgVFJBQ0tJTkdcIiwgXCJ2YXJpYW50XCI6IFwiYWNjZW50XCIgfVxuICAgIF1cbiAgfVxuXVxuXG5cbn1cbiIsIlxuXG5cblxuXG5cblxuXG5cblxuPGltZyBzcmM9XCJicmFpbmJnLnN2Z1wiIGNsYXNzPVwiYnJhaW5pbWdcIiAvPiBcblxuPGRpdiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWFpbi10ZXh0XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAycmVtO1wiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6ICNjMWZmZmVcIj5DSE9PU0UgWU9VUjwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6ICNmZjUxZmFcIj5CQVRUTEVHUk9VTkQ8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cIm1haW4taW5wdXQtYm94XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA0cmVtO1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1yb3dcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtY29sLTA1XCIgc3R5bGU9XCJ3aWR0aDogMTdyZW07XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWxhYmVsLXR4dFwiIHN0eWxlPVwiY29sb3I6ICNjMWZmZmViMjtcIj4gQ09NQkFUQU5UIEFMSUFTIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJmaW5nZXJwcmludC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5FVVJBTF9TVFJJS0VSXzAxXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtY29sLTA1XCIgc3R5bGU9XCJ3aWR0aDogMTRyZW07XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWxhYmVsLXR4dFwiIHN0eWxlPVwiY29sb3I6ICNmZjUxZmFiMjtcIj4gU0VDVVJFIExJTksgQ09ERSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwicGhvbmUuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCI2IERJR0lUIFJPT00gQ09ERVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImpvaW4tYnRuXCI+Sk9JTiBBUkVOQTwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLW1zZ1wiPiBJbml0aWFsaXplIG5ldXJhbCB1cGxpbmsgcHJvdG9jb2wg4oCiIFNlY3VyZSBjb25uZWN0aW9uIHJlcXVpcmVkIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJyb29tLWdyaWRcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDRyZW07XCI+XG5cbiAgICAgICAgQGZvcihpdGVtIG9mIHJvb21UeXBlczsgdHJhY2sgaXRlbS5pZCl7XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWl0ZW1cIiBbY2xhc3NdPVwieydoYXJkY29yZS1yb29tJzogaXRlbS5pZD09J2hhcmRjb3JlLW1vZGUnIH1cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicm9vbS1pY29uXCIgW3NyY109XCJpdGVtLmljb25cIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb29tLXRpdGxlXCI+IHt7IGl0ZW0udGl0bGUgfX0gPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvb20tZGVzY3JpcHRpb25cIj4ge3sgaXRlbS5kZXNjcmlwdGlvbiB9fSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtjbGFzc109XCJ7J3Jvb20tYnRuJzogaXRlbS5pZCE9J2hhcmRjb3JlLW1vZGUnLCAnaGFyZC1jb3JlLWJ0bic6IGl0ZW0uaWQ9PSdoYXJkY29yZS1tb2RlJyB9XCI+IFxuICAgICAgICAgICAgICAgICAgICBAaWYoaXRlbS5pZD09J2hhcmRjb3JlLW1vZGUnKXsgRU5URVIgSUYgWU9VIERBUkUgfUBlbHNlIHsgRU5URVIgfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgfVxuXG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJpbmZvLWNvbnRhaW5lclwiIHN0eWxlPVwibWFyZ2luLXRvcDogNHJlbTsgbWFyZ2luLWJvdHRvbTogMTByZW07XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1tYWluLXR4dFwiPiAgU1lTVEVNIElOVEVMTElHRU5DRSA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViaGVhZGVyXCI+IE5ldXJhbCBOZXR3b3JrIEFyY2hpdGVjdHVyZSAmIFBlcmZvcm1hbmNlIENvcmUgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWdyaWRcIj5cblxuICAgICAgICAgICAgQGZvcihpdGVtIG9mIGluZm9DYXJkczsgdHJhY2sgaXRlbS5pZCl7XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1jYXJkXCIgW2NsYXNzXT1cIid0aGVtZS0nICsgaXRlbS50aGVtZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQmFja2dyb3VuZCBncmFkaWVudCBvdmVybGF5IC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2Utb3ZlcmxheVwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGVudCB3cmFwcGVyIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyB6LWluZGV4OiAxOyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEuNXJlbTtcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJY29uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cIml0ZW0uaWNvblwiIGNsYXNzPVwiYmFkZ2UtaWNvblwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQ29udGVudCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDAuNzVyZW07IGZsZXg6IDE7XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRpdGxlIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERlc2NyaXB0aW9uIHdpdGggaGlnaGxpZ2h0cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2UtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlmKGl0ZW0uZGVzY3JpcHRpb25IaWdobGlnaHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGZvcihwYXJ0IG9mIGl0ZW0uZGVzY3JpcHRpb25IaWdobGlnaHQ7IHRyYWNrICRpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlmKHBhcnQuaGlnaGxpZ2h0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogNjAwO1wiIFtzdHlsZV09XCJ7ICdjb2xvcic6IHBhcnQuY29sb3IgfVwiID57eyBwYXJ0LnRleHQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfUBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBwYXJ0LnRleHQgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9QGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gQmFkZ2VzIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNzVyZW07IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLXRvcDogMC41cmVtO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAZm9yKGJhZGdlIG9mIGl0ZW0uYmFkZ2VzOyB0cmFjayBiYWRnZS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzc109XCInYmFkZ2UgYmFkZ2UtJyArIGJhZGdlLnZhcmlhbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBiYWRnZS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cblxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvYmJ5JyxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2JieS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9sb2JieS5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgTG9iYnlDb21wb25lbnQge1xuXG59XG4iLCJcbjxkaXYgY2xhc3M9XCJsb2JieS1tYWluLWNvbnRhaW5lclwiPlxuXG4gICAgPCEtLSBMRUZUIFBBUlQgT0YgU0NSRUVOIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcIj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDFyZW07XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibHVlLWJhbGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ2h0LWJsdWVcIj4gU1RBVFVTIDogTUFUQ0hJTkcgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2dhcDowO1wiPiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN5bmNoaW5nXCI+IFNZTkNJTkcgPC9kaXY+IDxicj4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZXR3b3JrXCI+IE5FVVJBTCA8L2Rpdj4gPGJyPiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ldHdvcmtcIj4gTkVUV09SS1MgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JleS10ZXh0XCI+IEVOQ1JZUFRFRCBST09NIElEIDogPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb29taWQtYm94IHRyYW5zLWJveFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb29taWRcIj4gIzQ4Mi05MTAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwicm9vbWljb25cIiBzcmM9XCJyb29taWQtaWNvbi5zdmdcIiBhbHQ9XCJcIi8+IFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV1cmFsLWNhcC1jb250YWluZXIgdHJhbnMtYm94XCI+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG90LWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFwiPjc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsXCI+LzEwPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2dhcDoxcmVtO1wiPiBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPiBOZXVyYWwgQ2FwYWNpdHkgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJoZWFkZXJcIj4gMyBTbG90cyByZW1haW5pbmcgZm9yIGxpbmsgc3RhYmlsaXR5IDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuXG48L2Rpdj5cblxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExhbmRpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2JieUNvbXBvbmVudCB9IGZyb20gJy4vbG9iYnkvbG9iYnkuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogTGFuZGluZ1BhZ2VDb21wb25lbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ2xvYmJ5JyxcbiAgICAgICAgY29tcG9uZW50OiBMb2JieUNvbXBvbmVudFxuICAgIH1cbl07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgaW1wb3J0czogW1JvdXRlck91dGxldF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vYXBwLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICduZXVyb2FyZW5hLXVpJztcblxuICBvcGVuR2l0aHViKCl7XG4gICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9kZWVwZXNoZG0vTmV1cm9BcmVuYScsICdfYmxhbmsnKTtcbiAgfVxuXG59XG4iLCJcblxuPGRpdiBjbGFzcz1cImFwcC1oZWFkZXJcIj5cbiAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjsgd2lkdGg6IDEwMCU7XCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiIChjbGljayk9XCJvcGVuR2l0aHViKClcIj4gTmV1cm9BcmVuYSA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHJvdXRlci1vdXRsZXQgLz5cbiJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsNEJBQTRCOzs7QUNBckMsU0FBNEIsa0NBQWtDO0FBQzlELFNBQVMscUJBQXFCOzs7QUNEOUIsU0FBUyxpQkFBaUI7Ozs7Ozs7OztBQzZEeUIsSUFBQSxvQkFBQSxHQUFBLHFCQUFBOzs7OztBQUEyQixJQUFBLG9CQUFBLEdBQUEsU0FBQTs7Ozs7QUFMbEUsSUFBQSw0QkFBQSxHQUFBLE9BQUEsRUFBQTtBQUNJLElBQUEsdUJBQUEsR0FBQSxPQUFBLEVBQUE7QUFDQSxJQUFBLDRCQUFBLEdBQUEsT0FBQSxFQUFBO0FBQXlCLElBQUEsb0JBQUEsQ0FBQTtBQUFpQixJQUFBLDBCQUFBO0FBQzFDLElBQUEsNEJBQUEsR0FBQSxPQUFBLEVBQUE7QUFBK0IsSUFBQSxvQkFBQSxDQUFBO0FBQXVC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