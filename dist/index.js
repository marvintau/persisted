!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.persisted=t():e.persisted=t()}(window,(function(){return function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,r){"use strict";function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var n=function(){function Group(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.desc,o=void 0===n?"无描述":n,i=r.style,a=void 0===i?"paginator":i;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Group),_defineProperty(this,"iter",(function(e){for(var r=Object.entries(t.group),n=0;n<r.length;n++){var o=_slicedToArray(r[n],2),i=o[0],a=o[1];t.group[i]=e(i,a)}return new Group(t)})),_defineProperty(this,"filter",(function(e){var r={};for(var n in t.group)e(n)&&(r[n]=t.group[n]);return t.group=r,new Group(t)})),e instanceof Group?Object.assign(this,e):(this.group=e,this.desc=o,this.style=a)}return function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Group,[{key:"get",value:function get(e){return this.group[e]}},{key:"set",value:function set(e,t){return this.group[e]=t,new Group(this)}},{key:"vals",value:function vals(){return o.from(Object.values(this.group))}},{key:"keys",value:function keys(){return Object.keys(this.group)}},{key:"grap",value:function grap(){return o.from(this.vals().flat())}}]),Group}();function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toArray(e){return function List_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||_iterableToArray(e)||function List_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||_iterableToArray(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function List_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,e)})(e)}function _construct(e,t,r){return(_construct=function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(e){function List(){var e;!function List_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,List);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return _possibleConstructorReturn(this,(e=_getPrototypeOf(List)).call.apply(e,[this].concat(r)))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(List,e),function List_createClass(e,t,r){return t&&List_defineProperties(e.prototype,t),r&&List_defineProperties(e,r),e}(List,[{key:"last",value:function last(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e=Math.max(Math.min(e,this.length),1),this[this.length-e]}},{key:"isEmpty",value:function isEmpty(){return 0===this.length}},{key:"ordr",value:function ordr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.sort((function(r,n){var o=e(r),i=e(n);return o<i?-t:o>i?t:0})),List.from(this)}},{key:"grip",value:function grip(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.desc,o=void 0===r?"noname":r,i=t.style,a=void 0===i?"paginator":i,s={},u=0;u<this.length;u++){var c=e(this[u]);c in s||(s[c]=new List(0)),s[c].push(this[u])}return new n(s,{desc:o,style:a})}},{key:"uniq",value:function uniq(e){for(var uniq={},t=0;t<this.length;t++)uniq[e(this[t])]=this[t];var r=new List(0);for(var n in uniq)r.push(uniq[n]);return r}},{key:"cascade",value:function cascade(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){t.addChild(e)};console.log("length",this.length),console.time("grip");var n,o=this.ordr(e).grip(e).vals();for(console.timeEnd("grip"),n=o.pop();o.length>0;n=o.pop()){for(var i=o.pop(),a=0;a<i.length;a++)i[a].heir=[];for(console.time("comparisonLevel");n.length>0;)for(var s=n.pop(),u=0;u<i.length;u++){var c=i[u];t(s,c)&&r(s,c)}for(var l=0;l<i.length;l++)i[l].subs=void 0;console.timeEnd("comparisonLevel"),o.push(i)}return n}},{key:"flatten",value:function flatten(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e.heir},t=List.from(this).reverse(),r=new List(0);t.length;){var n=t.pop();r.push(n),t.push.apply(t,_toConsumableArray(List.from(e(n)).reverse()))}return r}},{key:"flattenPath",value:function flattenPath(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e.heir},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e.heir.isEmpty()},r=List.from(this).map((function(e){return[e]})),n=new List(0);console.time("flattenPath");for(var o=function _loop(){var o=r.pop(),i=_toArray(o),a=i[0],s=i.slice(1);t(a)?n.push(o):r.push.apply(r,_toConsumableArray(e(a).map((function(e){return[e,a].concat(_toConsumableArray(s))}))))};r.length;)o();return console.timeEnd("flattenPath"),n.map((function(e){return List.from(e)}))}},{key:"outer",value:function outer(e,t){for(var r=t.fromCol,n=t.thisCol,o=new Map,i=e.length-1;i>=0;i--)o.set(r,e[i][r]);for(var a=this.length-1;a>=0;a--){var s=this[a][n];o.has(s)&&Object.assign(this[a],o.get(s))}return List.from(this)}},{key:"insert",value:function insert(e,t){return this.splice(e,0,t),List.from(this)}},{key:"swap",value:function swap(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(1===t){if(e<this.length-1){var r=[this[e+1],this[e]];this[e]=r[0],this[e+1]=r[1]}}else if(e>0){var n=[this[e],this[e-1]];this[e-1]=n[0],this[e]=n[1]}return List.from(this)}},{key:"remove",value:function remove(e){return this.splice(e,1),List.from(this)}},{key:"toObject",value:function toObject(){return Object.fromEntries(this)}}]),List}(_wrapNativeSuper(Array));function Record_slicedToArray(e,t){return function Record_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function Record_iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function Record_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Record_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function Record(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.head,n=void 0===r?{}:r,i=t.heir,a=void 0===i?new o(0):i,s=t.subs,u=t.attr,c=void 0===u?{}:u;if(function Record_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Record),e instanceof Record)Object.assign(this,e);else{for(var l in this.cols={},n){var f=null===e[l]?void 0:e[l];void 0!==f&&f.error?this.cols[l]=f:(n[l].type===Number&&(void 0===f&&(f="0"),f=f.toString().replace(/,/g,"")),this.cols[l]=void 0===f?void 0:new n[l].type(f))}this.head=n,this.subs=s,this.heir=a,this.attr=c}}return function Record_createClass(e,t,r){return t&&Record_defineProperties(e.prototype,t),r&&Record_defineProperties(e,r),e}(Record,[{key:"copy",value:function copy(){var e=Object.assign({},this.cols),t=Object.assign({},this.attr),r=o.from(this.heir);return new Record(e,{head:this.head,heir:r,attr:t})}},{key:"set",value:function set(e,t){var r=this.head[e].type;return this.cols[e]=new r(t),new Record(this)}},{key:"get",value:function get(e){return this.cols[e]}},{key:"table",value:function table(){return this.subs}},{key:"hasChild",value:function hasChild(){return this.heir.length>0}},{key:"hasTable",value:function hasTable(){return void 0!==this.subs}},{key:"isLeaf",value:function isLeaf(){return!(this.hasChild()||this.hasTable())}},{key:"addChild",value:function addChild(e){this.heir.push(e)}},{key:"keys",value:function keys(){return Object.keys(this.cols)}},{key:"valueOf",value:function valueOf(){var e=Object.entries(this.cols).map((function(e){var t=Record_slicedToArray(e,2);return[t[0],t[1].valueOf()]}));return Object.fromEntries(e)}}]),Record}();function Head_typeof(e){return(Head_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Head_toConsumableArray(e){return function Head_arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function Head_iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function Head_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Head_possibleConstructorReturn(e,t){return!t||"object"!==Head_typeof(t)&&"function"!=typeof t?function Head_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Head_wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return(Head_wrapNativeSuper=function _wrapNativeSuper(e){if(null===e||!function Head_isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return Head_construct(e,arguments,Head_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),Head_setPrototypeOf(Wrapper,e)})(e)}function Head_construct(e,t,r){return(Head_construct=function Head_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&Head_setPrototypeOf(o,r.prototype),o}).apply(null,arguments)}function Head_setPrototypeOf(e,t){return(Head_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function Head_getPrototypeOf(e){return(Head_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Head_slicedToArray(e,t){return function Head_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function Head_iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function Head_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Head_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Head_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Head_createClass(e,t,r){return t&&Head_defineProperties(e.prototype,t),r&&Head_defineProperties(e,r),e}var a=function(){function MultiLine(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Head_classCallCheck(this,MultiLine),this.lines=e.split(/[,;] */)}return Head_createClass(MultiLine,[{key:"valueOf",value:function valueOf(){return this.lines.join("\n")}},{key:"setLines",value:function setLines(e){this.lines=this.lines.map(e)}}]),MultiLine}(),s=function(){function RefString(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Head_classCallCheck(this,RefString),"RefString"===e.constructor.name||void 0!==e.string?this.string=e.string:this.string=e.toString()}return Head_createClass(RefString,[{key:"set",value:function set(e){return this.string=e,new RefString(e)}},{key:"valueOf",value:function valueOf(){return this.string}},{key:"display",value:function display(){var e=Head_slicedToArray(this.string.replace(/\s+/g,"").split("@"),2),t=e[0],r=e[1],n={refName:t,refBody:r};if(void 0===r&&(n.refName="",n.refBody=t),null!==n.refBody.match(/(SUB)|(SUMSUB)|(NONE)/))return n.refBody={func:n.refBody},n;var o,i=Head_slicedToArray(n.refBody.split(":"),2),a=i[0],s=i[1];return void 0===s&&(s=a,a=void 0),void 0!==a&&(o=a.split("/").map((function(e){return e.split("&")})).filter((function(e){return e[0].length>0}))),n.refBody={path:o,valExpr:s},n}}]),RefString}(),u=function(e){function Path(){var e;Head_classCallCheck(this,Path);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(0===r.length)(e=Head_possibleConstructorReturn(this,Head_getPrototypeOf(Path).call(this,0))).push(0);else if(Array.isArray(r[0])){var o;(o=e=Head_possibleConstructorReturn(this,Head_getPrototypeOf(Path).call(this,0))).push.apply(o,Head_toConsumableArray(r[0]))}else{var i;e=Head_possibleConstructorReturn(this,(i=Head_getPrototypeOf(Path)).call.apply(i,[this].concat(r)))}return Head_possibleConstructorReturn(e)}return function Head_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Head_setPrototypeOf(e,t)}(Path,e),Path}(Head_wrapNativeSuper(Array)),c=function(){function Head(e){Head_classCallCheck(this,Head);var t={Float:Number,Integer:Number,String:String,Date:Date,Path:u,RefString:s,MultiLine:a};for(var r in e)e[r]in t||console.warn('Head: found non-existing type "'.concat(e[r],'", typo suggested.'),Object.keys(t)),this[r]={type:t[e[r]]}}return Head_createClass(Head,[{key:"len",value:function len(){return Object.keys(this).length}},{key:"lenDisplayed",value:function lenDisplayed(){return Object.values(this).filter((function(e){return!(e.hidden||e.isTitle)})).length}},{key:"sum",value:function sum(e){var t=this,r={String:function String(e){for(var t=!0,r=0;r<e.length-1&&(t=t&&e[r].valueOf()==e[r+1].valueOf());r++);return t?e[0]:"..."},Number:function Number(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t}},n={},o=function _loop(o){var i=e.map((function(e){return e.get(o)})),a=t[o].type.name;void 0!==r[a]&&(n[o]=r[t[o].type.name](i))};for(var a in this)o(a);return new i(n,{head:this})}},{key:"setColProp",value:function setColProp(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={isExpandToggler:!1};if(t in this)Object.assign(this[t],{colDesc:t},r,e);else for(var n in t)n in this&&Object.assign(this[n],{colDesc:n},r,e)}},{key:"checkColProp",value:function checkColProp(e){for(var t in this)if(!(e in this[t]))return{res:!1,key:t};return{res:!0}}},{key:"createRecord",value:function createRecord(e){if(void 0===e)for(var t in e={},this)e[t]=new this[t].type;return new i(e,{head:this})}},{key:"createTableFromColumnLists",value:function createTableFromColumnLists(e){for(var t=e.length,r=e.table,n=[],a=0;a<t;a++){var s={};for(var u in r)s[u]=r[u][a];n.push(new i(s,{head:this}))}return new o(n)}}]),Head}();var l=function Table(e,t,r){!function Table_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Table),this.head=e,this.data=t,this.tableAttr=r};function Sheet_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function Sheet(e){var t=e.referred,r=void 0===t?{}:t,n=e.type,o=e.isSavable,i=void 0!==o&&o,a=e.isExportable,s=void 0!==a&&a,u=e.status,c=void 0===u?"none":u,l=e.location,f=void 0===l?"local":l,h=e.importProc,p=e.exportProc,y=e.forceReload,d=void 0!==y&&y,v=e.desc,_=void 0===v?"无描述":v;!function Sheet_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Sheet),this.referred=r,this.importProc=h,this.exportProc=p,this.type=n,this.desc=_,this.isSavable=i,this.isExportable=s,this.status=c,this.location=f,this.forceReload=d}return function Sheet_createClass(e,t,r){return t&&Sheet_defineProperties(e.prototype,t),r&&Sheet_defineProperties(e,r),e}(Sheet,[{key:"addReferred",value:function addReferred(e,t){this.referred[e]=t}},{key:"receive",value:function receive(e,t,r){var n=this;(this.blobs=this.blobs||[],this.blobs.push(e),"LAST"===t)&&new Blob(this.blobs).text().then((function(e){n.data=JSON.parse(e),n.status="ready",r()}))}},{key:"import",value:function _import(e){this.sections=this.importProc(e),this.status="ready"}}]),Sheet}();function SheetCollection_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function(){function SheetCollection(e){var t=this;!function SheetCollection_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SheetCollection),function SheetCollection_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(this,"fetchTable",(function(e){var r=e.projName,n=e.sheetName,o=e.afterFetched;t.sheets[n].forceReload&&(t.sheets[n].status="none"),t.afterFetched=o,t.fetchStack.push({projName:r,sheetName:n,sheetSpec:t.sheets[n]}),t.fetchTableWorker()})),this.sheets={},this.socket=e,this.fetchStack=[],this.refs={},this.socket.on("RECV",(function(e){var r=e.position,n=(e.percent,e.projName),o=e.sheetName,i=e.data,a={projName:n,sheetName:o,position:r,type:t.sheets[o].type};t.socket.emit("SEND",a),t.sheets[o].receive(i)})).on("DONE",(function(e){e.projName;var r=e.sheetName,n=e.data;t.sheets[r].receive(n,"LAST",(function(){t.fetchTableWorker()}))})).on("SAVED",(function(){console.log("receipt.")}))}return function SheetCollection_createClass(e,t,r){return t&&SheetCollection_defineProperties(e.prototype,t),r&&SheetCollection_defineProperties(e,r),e}(SheetCollection,[{key:"get",value:function get(e){return this.sheets[e]}},{key:"clearSheets",value:function clearSheets(){this.sheets={}}},{key:"addSheet",value:function addSheet(e,t){if(console.log(t.constructor.name),"Sheet"!==t.constructor.name)throw Error("加入SheetCollection的并不是一个Sheet对象");this.sheets[e]=t}},{key:"addSheets",value:function addSheets(e){for(var t in e)this.addSheet(t,e[t])}},{key:"fetchTableWorker",value:function fetchTableWorker(){if(console.log("FetchTable® Worker Working."),0!==this.fetchStack.length){var e=this.fetchStack[this.fetchStack.length-1],t=e.projName,r=e.sheetName,n=e.sheetSpec;if("ready"===n.status)this.fetchStack.pop(),0===this.fetchStack.length?this.afterFetched():(console.log(t,r,"fetched."),this.fetchTableWorker());else if("remote"===n.location)console.log("handling remote"),this.socket.emit("SEND",{projName:t,sheetName:r,type:n.type,position:0});else if("local"===n.location){console.log("handling local");var o=n.referred,i=!0;for(var a in o){var s=o[a];"remote"===s.location&&void 0===this.sheets[a]&&(this.sheets[a]=new f(s)),"ready"!=this.sheets[a].status&&(console.log("push remote"),this.fetchStack.push({projName:t,sheetName:a,sheetSpec:this.sheets[a]})),i=i&&"ready"===this.sheets[a].status}i&&this.sheets[r].import(this.sheets),this.fetchTableWorker()}else this.log("遇到了一个表没有定义location，是写代码的人的锅，请打电话联系他。")}else console.log("handling racing.")}}]),SheetCollection}();r.d(t,"Head",(function(){return c})),r.d(t,"Record",(function(){return i})),r.d(t,"Group",(function(){return n})),r.d(t,"List",(function(){return o})),r.d(t,"Table",(function(){return l})),r.d(t,"Sheet",(function(){return f})),r.d(t,"SheetCollection",(function(){return h}))}])}));