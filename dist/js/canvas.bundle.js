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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Assests/Flag.png":
/*!******************************!*\
  !*** ./src/Assests/Flag.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "68df0e0d2ff6dbafce55dc032afb8afa.png");

/***/ }),

/***/ "./src/Assests/PixelBackground.png":
/*!*****************************************!*\
  !*** ./src/Assests/PixelBackground.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6205e2b5f21438787d173ac47197a469.png");

/***/ }),

/***/ "./src/Assests/PixelHills.png":
/*!************************************!*\
  !*** ./src/Assests/PixelHills.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c2f14b7cb60b240ad4cd6aa1b6e75eb8.png");

/***/ }),

/***/ "./src/Assests/PixelPlatform.png":
/*!***************************************!*\
  !*** ./src/Assests/PixelPlatform.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "505ebd6817d04e039e10f63f3fe77486.png");

/***/ }),

/***/ "./src/Assests/scarlet.png":
/*!*********************************!*\
  !*** ./src/Assests/scarlet.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b0a25fc2604cf0337c83af108eb599dd.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Assests_PixelPlatform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Assests/PixelPlatform.png */ "./src/Assests/PixelPlatform.png");
/* harmony import */ var _Assests_PixelHills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Assests/PixelHills.png */ "./src/Assests/PixelHills.png");
/* harmony import */ var _Assests_PixelBackground_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assests/PixelBackground.png */ "./src/Assests/PixelBackground.png");
/* harmony import */ var _Assests_scarlet_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assests/scarlet.png */ "./src/Assests/scarlet.png");
/* harmony import */ var _Assests_Flag_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assests/Flag.png */ "./src/Assests/Flag.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//import every images




 //Canvas Properties

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.2; //Player Properties

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    //Start Position
    this.position = {
      x: 100,
      y: 300
    }; //Start Velocity

    this.velocity = {
      x: 0,
      y: 0
    }; //Player Size

    this.width = 64;
    this.height = 64; //Player Speed

    this.speed = 7;
    this.image = createImage(_Assests_scarlet_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      //Player Image
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.position.x += this.velocity.x; //player falling

      this.position.y += this.velocity.y;
      this.draw(); //If player not touching the ground = fall

      if (this.position.y + this.height + this.velocity.y <= canvas.height) //Increse velocity w/ time    
        this.velocity.y += gravity;
    }
  }]);

  return Player;
}(); //Platforms


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    }; //Get platform image

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); //Background


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    }; //Get image

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}(); //image


function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
} //Init Player 


var player = new Player(); //Init Platforms

var platformImage = createImage(_Assests_PixelPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platforms = [];
var genericObjects = []; //All the keys

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; //How far screen has scrolled

var scrollOffset = 0;

function restart() {
  //Init Player 
  player = new Player();
  platformImage = createImage(_Assests_PixelPlatform_png__WEBPACK_IMPORTED_MODULE_0__["default"]); //Init Platforms

  platforms = [new Platform({
    x: 0,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 400,
    y: 350,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 400,
    y: 235,
    image: platformImage
  }), new Platform({
    x: 3100,
    y: -10,
    image: createImage(_Assests_Flag_png__WEBPACK_IMPORTED_MODULE_4__["default"])
  }), new Platform({
    x: platformImage.width * 5,
    y: 120,
    image: platformImage
  }), new Platform({
    x: platformImage.width / 2,
    y: 350,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -500,
    y: -1,
    image: createImage(_Assests_PixelBackground_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_Assests_PixelHills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })]; //How far screen has scrolled

  scrollOffset = 0;
} //Update like function


function animate() {
  //Calls function again and again  
  requestAnimationFrame(animate); //Clears old player position 

  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height); //Draw Background

  genericObjects.forEach(function (genericObjects) {
    genericObjects.draw();
  }); //Draw Platform

  platforms.forEach(function (platform) {
    platform.draw();
  }); //Draw player after platforms to make him infront

  player.update();

  if (keys.right.pressed && player.position.x < 600 || keys.right.pressed && scrollOffset === 2500) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 300 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed && scrollOffset < 2500) {
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      scrollOffset += player.speed;
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.4;
      });
    }

    if (keys.left.pressed && scrollOffset > 0) {
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      scrollOffset -= player.speed;
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.4;
      });
    }
  } //Win condition


  if (scrollOffset > 2000) {
    console.log('you win');
  } //Loose condition


  if (player.position.y > canvas.height) {
    restart();
  } //Platform collision detection
  //1. Stops player when height > platform
  //2. when falling
  //3. only when same x position as the platform


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
}

restart();
animate(); //When a key is pressed

addEventListener('keydown', function (_ref3) {
  var keyCode = _ref3.keyCode;

  //console.log(keyCode)
  switch (keyCode) {
    //Q
    case 81:
      keys.left.pressed = true;
      break;
    //D

    case 68:
      keys.right.pressed = true;
      break;
    //Space

    case 32:
      console.log('up');

      if (player.velocity.y == 0) {
        player.velocity.y -= 10;
      }

      break;
  }
}); //When a key is released

addEventListener('keyup', function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    //Q
    case 81:
      keys.left.pressed = false;
      break;
    //D

    case 68:
      keys.right.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map