/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	{
	  (function () {
	    var renderContactList = function renderContactList(inf) {
	      if (localStorage.getItem("id") == 0 || localStorage.length == 0) {
	        renderContacts(inf[0]);
	      } else {
	        renderContacts(inf[localStorage.getItem("id")]);
	        if (localStorage.getItem("container") != null) showPrompt(document.getElementById(localStorage.getItem("container")));
	      }
	      document.getElementById("slider-previous").onclick = function () {
	        renderAnimation();
	        renderContacts(inf[localStorage.getItem("id") - 1]);
	      };
	      document.getElementById("slider-next").onclick = function () {

	        if (localStorage.getItem("id") == null) {
	          renderAnimation();
	          renderContacts(inf[0]);
	        } else {
	          renderContacts(inf[+localStorage.getItem("id") + 1]);
	          renderAnimation();
	        }
	      };
	    };

	    var renderAnimation = function renderAnimation() {
	      if (document.getElementById("contacts").style.animation == "newslidein 3s") {
	        document.getElementById("contacts").style.animation = "slidein 3s";
	      } else {
	        document.getElementById("contacts").style.animation = "newslidein 3s";
	      }
	    };

	    var renderButton = function renderButton() {
	      if (localStorage.getItem("id") == 0 || localStorage.length == 0) {
	        document.getElementById("slider-previous").style.display = "none";
	      } else {
	        document.getElementById("slider-previous").style.display = "";
	      }

	      if (localStorage.getItem("id") == 7) {
	        document.getElementById("slider-next").style.display = "none";
	      } else {
	        document.getElementById("slider-next").style.display = "";
	      }
	    };

	    var renderContacts = function renderContacts(contacts) {
	      localStorage.setItem('id', contacts["id"] - 1);
	      renderButton();
	      for (var props in contacts) {

	        if (props === "id") continue;

	        getUssualyProps(props, contacts);
	      }
	      function getUssualyProps(props, contacts) {

	        if (Object.prototype.toString.call(contacts[props]) === "[object Object]") {
	          for (var accurateProps in contacts[props]) {

	            if (accurateProps == "name") {
	              var contact = document.getElementById("name_сompany");
	              contact.innerHTML = contacts[props]["name"];
	              continue;
	            }
	            getUssualyProps(accurateProps, contacts[props]);
	          }
	        } else {
	          var contact = document.getElementById(props);
	          contact.innerHTML = contacts[props];
	        }
	      };
	    };

	    var showCover = function showCover() {
	      var coverDiv = document.createElement('div');
	      coverDiv.id = 'cover-div';
	      document.body.appendChild(coverDiv);
	    };

	    var hideCover = function hideCover() {
	      document.body.removeChild(document.getElementById('cover-div'));
	    };

	    var showPrompt = function showPrompt(container) {

	      if (document.getElementById('cover-div') != null) {
	        hideCover();
	        document.getElementById('prompt-form-container_address').style.display = "none";
	      }

	      showCover();

	      function complete() {
	        hideCover();
	        container.style.display = "none";
	        document.onkeydown = null;
	        localStorage.removeItem("container");
	      }

	      document.onkeydown = function (e) {
	        if (e.keyCode == 27) {
	          complete();
	        }
	      };
	      container.style.display = 'block';
	    };

	    var xhr = new XMLHttpRequest();

	    xhr.open('GET', 'http://jsonplaceholder.typicode.com/users', true);
	    xhr.send();

	    xhr.onreadystatechange = function () {
	      if (xhr.readyState != 4) return;

	      if (xhr.status != 200) {
	        alert(xhr.status + ': ' + xhr.statusText);
	      } else {
	        renderContactList(JSON.parse(xhr.responseText));
	      }
	    };

	    ;

	    ;

	    ;

	    ;

	    document.getElementById("show_address").onclick = function () {
	      showPrompt(document.getElementById('prompt-form-container_address'));
	      localStorage.setItem('container', 'prompt-form-container_address');
	    };
	    document.getElementById("show_company").onclick = function () {
	      showPrompt(document.getElementById('prompt-form-container_company'));
	      localStorage.setItem('container', 'prompt-form-container_company');
	    };
	    document.getElementById("show_geo").onclick = function () {
	      showPrompt(document.getElementById('prompt-form-container_geo'));
	      localStorage.setItem('container', 'prompt-form-container_geo');
	    };

	    ;
	  })();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".ContactsList{\r\n\twidth: 350px;\r\n}\r\n\r\nhtml,body {\r\n      margin: 0;\r\n      padding: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n\r\n\t\t@-webkit-keyframes newslidein {\r\n\t\t  from {\r\n\t\t\t\topacity: 0;\r\n\r\n\t\t  }\r\n\r\n\t\t  to {\r\n\t\t\t\topacity:1;\r\n\t\t  }\r\n\t\t}\r\n\r\n\t\t@keyframes newslidein {\r\n\t\t  from {\r\n\t\t\t\topacity: 0;\r\n\r\n\t\t  }\r\n\r\n\t\t  to {\r\n\t\t\t\topacity:1;\r\n\t\t  }\r\n\t\t}\r\n\r\n@-webkit-keyframes slidein {\r\n  from {\r\n\t\topacity: 0;\r\n\r\n  }\r\n\r\n  to {\r\n\t\topacity:1;\r\n  }\r\n}\r\n\r\n@keyframes slidein {\r\n  from {\r\n\t\topacity: 0;\r\n\r\n  }\r\n\r\n  to {\r\n\t\topacity:1;\r\n  }\r\n}\r\n\r\n\t\t.fix_info{\r\n\t\t\tdisplay: -webkit-box;\r\n\t\t\tdisplay: -ms-flexbox;\r\n\t\t\tdisplay: flex;\r\n\t\t\t-ms-flex-wrap: nowrap;\r\n\t\t\t    flex-wrap: nowrap;\r\n\t\t\t-webkit-box-pack: start;\r\n\t\t\t    -ms-flex-pack: start;\r\n\t\t\t        justify-content: flex-start;\r\n\t\t}\r\n\r\n\t\t#contacts{\r\n\t\t\tmargin-left: 55px;\r\n\t\t\twidth: 360px;\r\n\t\t\t-webkit-animation: slidein 3s;\r\n\t\t\t        animation: slidein 3s;\r\n\t\t}\r\n\r\n\t\t.fix_info :first-child{\r\n\t\t\twidth: 175px;\r\n\t\t}\r\n\r\n\t\t#cover-div {\r\n      position: fixed;\r\n      top: 0;\r\n      left: 0;\r\n      z-index: 2;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: gray;\r\n      opacity: 0.3;\r\n    }\r\n\r\n\t\t#prompt-form_address,#prompt-form_company {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tpadding: 5px 5px 5px 5px;\r\n\t\t\tborder: 1px solid black;\r\n\t\t\tbackground: white no-repeat left 5px;\r\n\t\t\tvertical-align: middle;\r\n\t\t}\r\n\r\n\t\t#prompt-form-container_address,#prompt-form-container_company{\r\n\t\t\tposition: fixed;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tz-index: 3;\r\n\t\t\tdisplay: none;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\r\n\t\t#prompt-form-container_address:before,#prompt-form-container_company:before {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\theight: 100%;\r\n\t\t\tcontent: '';\r\n\t\t\tvertical-align: middle;\r\n\t\t}\r\n\r\n\t\t#prompt-form_geo {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tpadding: 5px 5px 5px 5px;\r\n\t\t\tborder: 1px solid black;\r\n\t\t\tbackground: white no-repeat left 5px;\r\n\t\t\tvertical-align: middle;\r\n\t\t}\r\n\r\n\t\t#prompt-form-container_geo {\r\n\t\t\tposition: fixed;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tz-index: 3;\r\n\t\t\tdisplay: none;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\r\n\t\t#prompt-form-container_geo:before {\r\n\t\t\tdisplay: inline-block;\r\n\t\t\theight: 100%;\r\n\t\t\tcontent: '';\r\n\t\t\tvertical-align: middle;\r\n\t\t}\r\n\r\n\t\t.slider-nav{\r\n\t\t\tdisplay: -webkit-box;\r\n\t\t\tdisplay: -ms-flexbox;\r\n\t\t\tdisplay: flex;\r\n\t\t\t-ms-flex-pack: distribute;\r\n\t\t\t    justify-content: space-around;\r\n\t\t}\r\n\r\n\t\ta{\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\ta:hover{\r\n\t\t\tcolor:#0000ff;\r\n\t\t\ttext-decoration:underline;\r\n\t\t}\r\n\r\n\t\t#slider-previous,#slider-next {\r\n\t\t\tcursor: pointer;\r\n\t\t  color: #fff;\r\n\t\t  text-decoration: none;\r\n\t\t  -webkit-user-select: none;\r\n\t\t     -moz-user-select: none;\r\n\t\t      -ms-user-select: none;\r\n\t\t          user-select: none;\r\n\t\t  background: rgb(212,75,56);\r\n\t\t  padding: .7em 1.5em;\r\n\t\t  outline: none; /* убирать контур в Mozilla */\r\n\t\t}\r\n\r\n\t\t#slider-previous:hover,#slider-next:hover { background: rgb(232,95,76); }\r\n\r\n\t\t#slider-previous:active,#slider-next:active { background: rgb(152,15,0); }\r\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);