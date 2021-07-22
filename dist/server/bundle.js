/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ammo_on_nodejs_1 = __webpack_require__(/*! @enable3d/ammo-on-nodejs */ \"@enable3d/ammo-on-nodejs\");\nvar Battle_1 = __webpack_require__(/*! ./scenes/Battle */ \"./src/server/scenes/Battle.ts\");\nammo_on_nodejs_1.Ammo().then(function () {\n    // @ts-ignore\n    global.Ammo = ammo_on_nodejs_1.Ammo;\n    new Battle_1.Battle();\n});\n\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "./src/server/players/Player.ts":
/*!**************************************!*\
  !*** ./src/server/players/Player.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Player = void 0;\nvar Unit_1 = __webpack_require__(/*! ../units/Unit */ \"./src/server/units/Unit.ts\");\nvar Battle_1 = __webpack_require__(/*! ../scenes/Battle */ \"./src/server/scenes/Battle.ts\");\nvar Player = /** @class */ (function () {\n    function Player(id, physics) {\n        this.id = id;\n        this.units = {};\n        this.physics = physics;\n    }\n    Player.prototype.create = function () {\n        var unit = new Unit_1.Unit('flwter');\n        this.units[unit.uuid] = unit;\n        this.physics.add.existing(unit, unit.physics);\n        Battle_1.io.emit('create-unit', {\n            playerId: this.id,\n            unitId: unit.uuid\n        });\n    };\n    Player.prototype.move = function (uuid) {\n        this.units[uuid].move();\n    };\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./src/server/players/Player.ts?");

/***/ }),

/***/ "./src/server/scenes/Battle.ts":
/*!*************************************!*\
  !*** ./src/server/scenes/Battle.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Battle = exports.io = void 0;\nvar ammo_on_nodejs_1 = __webpack_require__(/*! @enable3d/ammo-on-nodejs */ \"@enable3d/ammo-on-nodejs\");\nvar server_1 = __importStar(__webpack_require__(/*! @geckos.io/server */ \"@geckos.io/server\"));\nvar Player_1 = __webpack_require__(/*! ../players/Player */ \"./src/server/players/Player.ts\");\nexports.io = server_1.default({ iceServers: server_1.iceServers });\nexports.io.listen(8080);\nvar Battle = /** @class */ (function () {\n    function Battle() {\n        this.physics = new ammo_on_nodejs_1.Physics();\n        this.players = {};\n        this.create();\n    }\n    Battle.prototype.create = function () {\n        var _this = this;\n        exports.io.onConnection(function (channel) {\n            _this.players[channel.id] = new Player_1.Player(channel.id, _this.physics);\n            exports.io.emit('player-joined', _this.players);\n            channel.on('create-unit', function () {\n                _this.players[channel.id].create();\n            });\n            channel.on('move', function (uuid) {\n                _this.players[channel.id].move(uuid);\n            });\n        });\n        this.physics.setGravity(0, -9.81 * 2, 0);\n        // add ground\n        this.physics.add.ground({\n            y: -0.5,\n            collisionFlags: 1,\n            mass: 0,\n            width: 20,\n            height: 20,\n        });\n        // clock\n        var clock = new ammo_on_nodejs_1.ServerClock();\n        clock.disableHighAccuracy();\n        clock.onTick(function (delta) { return _this.update(delta); });\n    };\n    Battle.prototype.update = function (delta) {\n        this.physics.update(delta * 1000);\n    };\n    return Battle;\n}());\nexports.Battle = Battle;\n\n\n//# sourceURL=webpack:///./src/server/scenes/Battle.ts?");

/***/ }),

/***/ "./src/server/units/Unit.ts":
/*!**********************************!*\
  !*** ./src/server/units/Unit.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Unit = void 0;\nvar enable3d_1 = __webpack_require__(/*! enable3d */ \"enable3d\");\nvar Battle_1 = __webpack_require__(/*! ../scenes/Battle */ \"./src/server/scenes/Battle.ts\");\nvar Unit = /** @class */ (function (_super) {\n    __extends(Unit, _super);\n    function Unit(name) {\n        var _this = _super.call(this) || this;\n        _this.name = name;\n        _this.physics = { y: 20 };\n        setInterval(function () { return _this.send(); }, 1000 / 300);\n        return _this;\n    }\n    Unit.prototype.move = function () {\n        this.body.setVelocity(2, 0, 0);\n    };\n    Unit.prototype.send = function () {\n        var _a = this, uuid = _a.uuid, pos = _a.position, quat = _a.quaternion;\n        var fixed = function (n, f) {\n            return parseFloat(n.toFixed(f));\n        };\n        var updates = {\n            uuid: uuid,\n            pos: {\n                x: fixed(pos.x, 2),\n                y: fixed(pos.y, 2),\n                z: fixed(pos.z, 2),\n            },\n            quat: {\n                x: fixed(quat.x, 3),\n                y: fixed(quat.y, 3),\n                z: fixed(quat.z, 3),\n                w: fixed(quat.w, 3),\n            },\n        };\n        Battle_1.io.emit('updates', updates);\n    };\n    return Unit;\n}(enable3d_1.ExtendedObject3D));\nexports.Unit = Unit;\n\n\n//# sourceURL=webpack:///./src/server/units/Unit.ts?");

/***/ }),

/***/ "@enable3d/ammo-on-nodejs":
/*!*******************************************!*\
  !*** external "@enable3d/ammo-on-nodejs" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@enable3d/ammo-on-nodejs\");\n\n//# sourceURL=webpack:///external_%22@enable3d/ammo-on-nodejs%22?");

/***/ }),

/***/ "@geckos.io/server":
/*!************************************!*\
  !*** external "@geckos.io/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@geckos.io/server\");\n\n//# sourceURL=webpack:///external_%22@geckos.io/server%22?");

/***/ }),

/***/ "enable3d":
/*!***************************!*\
  !*** external "enable3d" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"enable3d\");\n\n//# sourceURL=webpack:///external_%22enable3d%22?");

/***/ })

/******/ });