(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{294:function(module,exports,__webpack_require__){var content=__webpack_require__(659);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(296)(content,options);content.locals&&(module.exports=content.locals)},298:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/useravatar.ab0f1c91.png"},299:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo.bbcd796b.png"},300:function(module,exports,__webpack_require__){__webpack_require__(301),__webpack_require__(414),module.exports=__webpack_require__(415)},322:function(module,exports){},415:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(297);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(658),module)}.call(this,__webpack_require__(416)(module))},658:function(module,exports,__webpack_require__){var map={"./App.stories.js":670,"./Example.stories.js":666};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=658},659:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(295)(!1)).push([module.i,'body{\n    margin: 0px;\n    padding: 0px;\n    font-family:"Segoe UI", "Noto Sans", "Ubuntu",  "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n}\n\n.navigation-container{\n    display: flex;\n    background-color:black;\n    width: 100%;\n    position: relative;\n    max-height: 40px;\n}\n\n.brand{\n    order: 1;\n}\n\n.app-image {\n    width: 12.5rem;\n    margin-top: 0.375rem;\n    border-right: 0.0625rem solid #a7b9bc;\n}\n\n.navbar-subnav{\n    order: 2;\n    flex: 1 1;\n}\n\n.nav-menu-items{\n    display: flex;\n    list-style-type: none;\n    padding-left: 0.125rem;\n    margin-top: 0.1875rem;\n}\n\n.nav-menu-links:hover{\n    background-color: #111;\n}\n\n.dropdown {\n    position: relative;\n}\n\n.dropdown.open > .dropdown-menu,.dropdown-menu-none {\n    display: block;\n}\n\n.dropdown .dropdown-toggle {\n    display: inline-block;\n    cursor: pointer;\n    text-decoration: none;\n    color: white;\n    margin: 0.1875rem 0rem;\n    padding: 0.375rem 0.5rem;\n    font-size: 0.75rem;\n    border-radius: 0.25rem;\n    font-weight: 600;\n}\n\n.dropdown .dropdown-menu {\n    left:0;\n    position: absolute;\n    top: 100%;\n    min-width: 8.125rem;\n    z-index: 1000;\n    display: none;\n    float: left;\n    padding: 0rem 0;\n    margin: 0.5625rem 0 0;\n    font-size: 0.8125rem;\n    text-align: left;\n    list-style: none;\n    background-color: white;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 0.0625rem solid #ccc;\n    border-radius: 0.25rem;\n}\n\n.dropdown .dropdown-menu-none {\n    left:0;\n    position: absolute;\n    top: 100;\n    min-width: 8.125rem;\n    left: 0;\n    z-index: 1000;\n    display: none;\n    float: left;\n    padding: 6.25rem 0,0,0.625rem;\n    margin: 0.5625rem 0 0;\n    font-size: 0.75rem;\n    font-style: italic;\n    text-align: left;\n    list-style: none;\n    background-color: white;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 0.0625rem solid #ccc;\n    border-radius: 0.25rem;\n    box-shadow: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.175);\n}\n\n.dropdown .dropdown-menu .dropdown-list {\n    cursor: pointer;\n}\n\n.dropdown .dropdown-menu .dropdown-list :hover {\n    background:#dedede;\n}\n\n.dropdown .dropdown-menu .dropdown-list > .dropdown-item {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    display: block;\n    padding: 0.3125rem 1.25rem 0.35rem 0.625rem;\n    clear: both;\n    font-weight: 350;\n    line-height: 1.42857143;\n    color: black;\n    white-space: nowrap;\n    text-decoration: none;\n\n}\n\n.dropdownMulti {\n    position: relative;\n }\n\n .dropdownMulti .dropdown-toggle {\n   display: inline-block;\n   cursor: pointer;\n   text-decoration: none;\n   color: white;\n   margin: 0.1875rem 0px;\n   padding: 0.375rem 8px;\n   font-size: 0.75rem;\n   border-radius: 0.25rem;\n   font-weight: 600;\n }\n\n .dropdownMulti .dropdown-toggle:hover{\n       background-color: #111;\n }\n \n .dropdownMulti.open > .dropdown-menu {\n   display: block;\n }\n\n .dropdownMulti .dropdown-menu {\n   left:0;\n   display: none;\n   position: absolute;\n   z-index: 1000;\n   padding: 0 0 0 0;\n   float: left;\n   margin: 0.5625rem 0 0;\n   font-size: 0.8125rem;\n   text-align: left;\n   list-style: none;\n   background-color: white;\n }\n\n .dropdownMulti .dropdown-menu .first,.second,.second-empty{\n     top: 100%;\n     position:absolute;\n     background-color:white;\n     width: 25rem;\n     background-clip: padding-box;\n     list-style-type:none;\n     margin:0;\n     padding:0 0 0 0.13rem;\n\n }\n\n .dropdownMulti .dropdown-list .dropdown-item{\n     display:block;\n     padding:0 0 0 0.3125rem;\n     line-height:1.875rem;\n     color:black;\n     font-size:0.875rem;\n     font-weight: 350;\n }\n\n .dropdownMulti .first .dropdown-item:hover,.second .dropdown-item:hover {\n     cursor: pointer;\n     background-color:#dedede;\n }\n\n .second,.second-empty{\n   left:9.375rem;\n   height:15.63rem;\n   border: 0.0625rem solid #ccc;\n   border-top-right-radius: 0.25rem;\n   border-bottom-right-radius: 0.25rem;\n   overflow-y: auto;\n\n }\n\n .second-empty .list-item{\n   font-style: italic;\n   padding:6.25rem 0 0 3.125rem;\n   font-weight: 300;\n }\n\n .first{\n   height:15.63rem;\n   border: 0.0625rem solid #ccc;\n   border-top-left-radius: 0.25rem;\n   border-bottom-left-radius: 0.25rem;\n }\n\n\n.navigation-search-bar{\n    order: 3;\n    position: relative;\n    padding-right: 0.625rem;\n}\n\n.search-box{\n    height: 1.563rem;\n    margin: 0.3125rem;\n    border: none;\n    border-radius: 0.25rem;\n    width: 100%;\n    font-size: 0.9375rem;\n    font-family: inherit;\n    outline: 0;\n}\n\n.search-btn {\n    position: absolute;\n    top: 0rem;\n    right: 0rem;\n    margin: 0.3125rem 0.125rem;\n    background-color: white;\n    border: none;\n    height: 1.688rem;\n    border-radius: 0.25rem;\n    font-size: 0.9375rem;\n    outline: 0;\n}\n\n.navigation-icons {\n    order: 4;\n    padding: 0 0.3125rem 0 0.25rem;\n}\n\n.list-dropdwn-icons{\n    display: flex;\n    list-style-type: none;\n    margin: 0rem 0rem;\n    padding: 0 0 0 0.125rem;\n}\n\n.list-dropdwn-icons .dropdown .title{\n  font-family: inherit;\n  vertical-align: middle;\n  font-weight: 400;\n  font-size: 0.875rem;\n}\n\n.list-dropdwn-icons .dropdown.open > .dropdown-menu {\n  display: block;\n}\n\n.list-dropdwn-icons .dropdown{\n    float:right;\n    color: white;\n    cursor: pointer;\n    text-decoration: none;\n    padding: 0rem 0rem;\n    font-size: 1.563rem;\n    border-radius: 0.25rem;\n}\n\n.list-dropdwn-icons .dropdown .dropdown-menu{\n    left: auto;\n    right:0;\n    min-width: 9.375rem;\n    display: none;\n    font-size: 0.875rem;\n    text-align: left;\n    color: black;\n    cursor: pointer;\n    float: left;\n    text-decoration: none;\n    margin: 0.4375rem 0rem;\n    padding: 0rem 0rem 0rem 0rem;\n    border-radius: 0.25rem;\n}\n\n.list-dropdwn-icons .dropdown .dropdown-menu .dropdown-item{\n    display: block;\n    font-size: 0.875rem;\n    text-align: left;\n    line-height: 1.42857143;\n    color: black;\n    cursor: pointer;\n    text-decoration: none;\n\n}\n\n.caret{\n    display: inline-block;\n    width: 0;\n    height: 0;\n    vertical-align: middle;\n    margin-left: 0.1875rem;\n    border-top: 0.25rem solid white;\n    border-right: 0.25rem solid transparent;\n    border-left: 0.25rem solid transparent;\n}\n\n.badge{\n    width: 1.875rem;\n    height: 1.875rem;\n    vertical-align: middle;\n    margin: -0.3125rem 0.3125rem;\n    padding:0 0.125rem;\n    border-radius: 50%;\n    display: inline-block;\n}\n\n.user-notification{\n    font-size: 1.25rem;\n}\n\n.notifications .dropdown .dropdown-menu{\n  min-width: 8.125rem;\n  margin: 0.375rem 0rem;\n}\n\n@media screen and (max-width: 61.875em){\n    .navigation-search-bar{\n     display: none;\n    }\n}\n\n@media screen and (max-width: 46.875em){\n    .navigation-icons{\n     display: none;\n    }\n}\n\n@media screen and (max-width: 34.375em){\n    .nav-menu-items{\n     display: none;\n    }\n}\n',""])},664:function(module,exports,__webpack_require__){var content=__webpack_require__(665);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(296)(content,options);content.locals&&(module.exports=content.locals)},665:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(295)(!1)).push([module.i,".side-nav-container{\n  position: fixed;\n  height: 100vh;\n  width: 12.5rem;\n  box-shadow: inset -0.0625rem 0 0 #e5e5e5;\n  background-color: #F1F1F1;\n}\n\n.subnav-menu-links{\n  display: flex;\n  color: #000;\n  padding: 0.625rem 1rem 0.625rem 1rem;\n  text-decoration: none;\n  flex-direction: column;\n}\n\n.subnav-menu-links:hover{\n  background-color: #dedede;\n}\n\n.menu-items{\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  border: 0.0625rem;\n  overflow: auto;\n}\n",""])},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"withText",(function(){return withText})),__webpack_require__.d(__webpack_exports__,"withEmoji",(function(){return withEmoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(174);__webpack_exports__.default={title:"Button"};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_1__.Button,null,"Hello Button"),withText=function(){return _ref};withText.displayName="withText";var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_1__.Button,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯")),withEmoji=function(){return _ref2};withEmoji.displayName="withEmoji",withText.__docgenInfo={description:"",methods:[],displayName:"withText"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Example.stories.js"]={name:"withText",docgenInfo:withText.__docgenInfo,path:"src/Example.stories.js"}),withEmoji.__docgenInfo={description:"",methods:[],displayName:"withEmoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Example.stories.js"]={name:"withEmoji",docgenInfo:withEmoji.__docgenInfo,path:"src/Example.stories.js"})},670:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),index_es=(__webpack_require__(15),__webpack_require__(20),__webpack_require__(21),__webpack_require__(18),__webpack_require__(61),__webpack_require__(2),__webpack_require__(50),__webpack_require__(62),__webpack_require__(14),__webpack_require__(22),__webpack_require__(23),__webpack_require__(48),__webpack_require__(58),__webpack_require__(294),__webpack_require__(153),__webpack_require__(125)),useravatar=__webpack_require__(298),useravatar_default=__webpack_require__.n(useravatar);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var classNames=__webpack_require__(663),_ref=react_default.a.createElement(index_es.a,{className:"user-notification",icon:"bell",color:"white"}),_ref2=react_default.a.createElement("span",{className:"caret"}),_ref3=react_default.a.createElement("img",{className:"badge",src:useravatar_default.a,alt:""}),Dropdown_Dropdown=function(_Component){function Dropdown(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Dropdown),_this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,_getPrototypeOf(Dropdown).call(this,props)),_defineProperty(_assertThisInitialized(_this),"showDropdown",(function(){_this.setState({isOpen:!0}),document.addEventListener("click",_this.hideDropdown)})),_defineProperty(_assertThisInitialized(_this),"hideDropdown",(function(){_this.setState({isOpen:!1}),document.removeEventListener("click",_this.hideDropdown)})),_defineProperty(_assertThisInitialized(_this),"chooseItem",(function(value){_this.state.labelItem!==value&&_this.setState({labelItem:value})})),_defineProperty(_assertThisInitialized(_this),"renderDataDropDown",(function(item,index){return react_default.a.createElement("li",{className:"dropdown-list",key:index,value:item},react_default.a.createElement("a",{className:"dropdown-item"},item))})),_this.state={isOpen:!1,labelItem:null,typeDropdown:null},_this.showDropdown=_this.showDropdown.bind(_assertThisInitialized(_this)),_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Dropdown,_Component),function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Dropdown,[{key:"render",value:function render(){var list=this.props.list,list2=this.props.list2,icon=this.props.useIcon?_ref:_ref2,useBadge=this.props.useBadge,dropdownClass=classNames({dropdown:!0,open:this.state.isOpen,"":!this.state.isOpen}),multidropdownClass=classNames({dropdownMulti:!0,open:this.state.isOpen,"":!this.state.isOpen});return 0===list2.length?react_default.a.createElement("div",{className:dropdownClass},react_default.a.createElement("div",{className:"dropdown-toggle",type:"button",onClick:this.showDropdown},useBadge?_ref3:null,react_default.a.createElement("span",{className:"title"},this.props.title),icon),react_default.a.createElement("ul",{className:"dropdown-menu"},list.map(this.renderDataDropDown))):react_default.a.createElement("div",{className:multidropdownClass},react_default.a.createElement("div",{className:"dropdown-toggle",type:"button",onClick:this.showDropdown},react_default.a.createElement("span",null,this.props.title),icon),react_default.a.createElement("ul",{className:"dropdown-menu"},react_default.a.createElement("ul",{className:"first"},list2.map(this.renderDataDropDown)),0<list.length?react_default.a.createElement("ul",{className:"second"},list.map(this.renderDataDropDown)):react_default.a.createElement("ul",{className:"second-empty"},react_default.a.createElement("li",null,react_default.a.createElement("div",{className:"list-item"},"You have not signed up to any ",this.props.title)))))}}]),Dropdown}(react.Component);Dropdown_Dropdown.displayName="Dropdown",_defineProperty(Dropdown_Dropdown,"defaultProps",{title:null,list:[],useIcon:!1,useBadge:!1,list2:[]}),Dropdown_Dropdown.__docgenInfo={description:"",methods:[{name:"showDropdown",docblock:null,modifiers:[],params:[],returns:null},{name:"hideDropdown",docblock:null,modifiers:[],params:[],returns:null},{name:"chooseItem",docblock:null,modifiers:[],params:[{name:"value",type:null}],returns:null},{name:"renderDataDropDown",docblock:null,modifiers:[],params:[{name:"item",type:null},{name:"index",type:null}],returns:null}],displayName:"Dropdown",props:{title:{defaultValue:{value:"null",computed:!1},required:!1},list:{defaultValue:{value:"[]",computed:!1},required:!1},useIcon:{defaultValue:{value:"false",computed:!1},required:!1},useBadge:{defaultValue:{value:"false",computed:!1},required:!1},list2:{defaultValue:{value:"[]",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Dropdown.js"]={name:"Dropdown",docgenInfo:Dropdown_Dropdown.__docgenInfo,path:"src/Dropdown.js"});var fontawesome_svg_core_index_es=__webpack_require__(84),free_solid_svg_icons_index_es=__webpack_require__(173),logo=__webpack_require__(299),logo_default=__webpack_require__.n(logo);function TopBar_typeof(obj){return(TopBar_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function TopBar_defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function TopBar_possibleConstructorReturn(self,call){return!call||"object"!==TopBar_typeof(call)&&"function"!=typeof call?function TopBar_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function TopBar_getPrototypeOf(o){return(TopBar_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function TopBar_setPrototypeOf(o,p){return(TopBar_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}fontawesome_svg_core_index_es.b.add(free_solid_svg_icons_index_es.b,free_solid_svg_icons_index_es.a);var TopBar_ref=react_default.a.createElement("div",{className:"brand"},react_default.a.createElement("a",{href:"#"},react_default.a.createElement("img",{className:"app-image",src:logo_default.a,alt:""}))),TopBar_ref2=react_default.a.createElement("div",{className:"navigation-search-bar"},react_default.a.createElement("form",{action:"#"},react_default.a.createElement("input",{type:"text",className:"search-box",placeholder:" Search "}),react_default.a.createElement("button",{className:"search-btn"},react_default.a.createElement(index_es.a,{icon:"search",color:"black"})))),TopBar_App=function(_Component){function App(){return function TopBar_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,App),TopBar_possibleConstructorReturn(this,TopBar_getPrototypeOf(App).apply(this,arguments))}return function TopBar_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&TopBar_setPrototypeOf(subClass,superClass)}(App,_Component),function TopBar_createClass(Constructor,protoProps,staticProps){return protoProps&&TopBar_defineProperties(Constructor.prototype,protoProps),staticProps&&TopBar_defineProperties(Constructor,staticProps),Constructor}(App,[{key:"render",value:function render(){var navListItems=[{name:"Courses",list:["CS-2150 Algorithms","CS-250 Operating Systems","CS-250 Operating Systems","CS-2150 Algorithms","CS-250 Operating Systems","CS-250 Operating Systems","CS-2150 Algorithms","CS-250 Operating Systems","CS-250 Operating Systems","CS-2150 Algorithms","CS-250 Operating Systems","CS-250 Operating Systems","CS-2150 Algorithms","CS-250 Operating Systems","CS-250 Operating Systems","CS-2150 Algorithms","CS-250 Operating Systems","CS-250 Operating Systems"],list2:["All Courses","Frequently Visited"]},{name:"Organizations",list:[],list2:["All Organizations"]},{name:"More",list:["Course Schedule","Events","Exam Schedule"],list2:[]}].map((function(navItem){return react_default.a.createElement("li",{key:navItem.name},react_default.a.createElement(Dropdown_Dropdown,{title:navItem.name,list:navItem.list,list2:navItem.list2}))}));return react_default.a.createElement("div",{className:"navigation-container"},TopBar_ref,react_default.a.createElement("div",{className:"navbar-subnav"},react_default.a.createElement("ul",{className:"nav-menu-items"},navListItems)),TopBar_ref2,react_default.a.createElement("div",{className:"navigation-icons"},react_default.a.createElement("ul",{className:"list-dropdwn-icons"},react_default.a.createElement("li",null,react_default.a.createElement(Dropdown_Dropdown,{title:"Abhiram Chepur",useBadge:!0,list:["Profile","Settings","Profile","Profile","Settings","Logout"]})),react_default.a.createElement("li",{className:"notifications"},react_default.a.createElement(Dropdown_Dropdown,{useIcon:!0,list:["Notification 1","Notification 2","Not"]})))))}}]),App}(react.Component);TopBar_App.displayName="App";var TopBar=TopBar_App;TopBar_App.__docgenInfo={description:"",methods:[],displayName:"App"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/TopBar.js"]={name:"App",docgenInfo:TopBar_App.__docgenInfo,path:"src/TopBar.js"});__webpack_require__(664);function SideBar_typeof(obj){return(SideBar_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function SideBar_defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function SideBar_possibleConstructorReturn(self,call){return!call||"object"!==SideBar_typeof(call)&&"function"!=typeof call?function SideBar_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function SideBar_getPrototypeOf(o){return(SideBar_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function SideBar_setPrototypeOf(o,p){return(SideBar_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var SideBar_SideBar=function(_Component){function SideBar(){return function SideBar_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SideBar),SideBar_possibleConstructorReturn(this,SideBar_getPrototypeOf(SideBar).apply(this,arguments))}return function SideBar_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&SideBar_setPrototypeOf(subClass,superClass)}(SideBar,_Component),function SideBar_createClass(Constructor,protoProps,staticProps){return protoProps&&SideBar_defineProperties(Constructor.prototype,protoProps),staticProps&&SideBar_defineProperties(Constructor,staticProps),Constructor}(SideBar,[{key:"render",value:function render(){var navListItems=[{name:"Home"},{name:"Courses"},{name:"Organizations"},{name:"Activity"}].map((function(navItem){return react_default.a.createElement("li",{key:navItem.name},react_default.a.createElement("a",{className:"subnav-menu-links",href:"#"},navItem.name))}));return react_default.a.createElement("div",{className:"side-nav-container"},react_default.a.createElement("div",{className:"side-nav"},react_default.a.createElement("ul",{className:"menu-items"},navListItems)))}}]),SideBar}(react.Component);function App_typeof(obj){return(App_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function App_defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function App_possibleConstructorReturn(self,call){return!call||"object"!==App_typeof(call)&&"function"!=typeof call?function App_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function App_getPrototypeOf(o){return(App_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function App_setPrototypeOf(o,p){return(App_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}SideBar_SideBar.displayName="SideBar",SideBar_SideBar.__docgenInfo={description:"",methods:[],displayName:"SideBar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/SideBar.js"]={name:"SideBar",docgenInfo:SideBar_SideBar.__docgenInfo,path:"src/SideBar.js"});var App_ref=react_default.a.createElement("div",null,react_default.a.createElement(TopBar,null),react_default.a.createElement(SideBar_SideBar,null)),App_App=function(_Component){function App(){return function App_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,App),App_possibleConstructorReturn(this,App_getPrototypeOf(App).apply(this,arguments))}return function App_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&App_setPrototypeOf(subClass,superClass)}(App,_Component),function App_createClass(Constructor,protoProps,staticProps){return protoProps&&App_defineProperties(Constructor.prototype,protoProps),staticProps&&App_defineProperties(Constructor,staticProps),Constructor}(App,[{key:"render",value:function render(){return App_ref}}]),App}(react.Component);App_App.displayName="App";var src_App_0=App_App;App_App.__docgenInfo={description:"",methods:[],displayName:"App"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/App.js"]={name:"App",docgenInfo:App_App.__docgenInfo,path:"src/App.js"}),__webpack_require__.d(__webpack_exports__,"app",(function(){return app}));__webpack_exports__.default={title:"Application"};var App_stories_ref=react_default.a.createElement(src_App_0,null),app=function(){return App_stories_ref};app.displayName="app",app.__docgenInfo={description:"",methods:[],displayName:"app"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/App.stories.js"]={name:"app",docgenInfo:app.__docgenInfo,path:"src/App.stories.js"})}},[[300,1,2]]]);
//# sourceMappingURL=main.387765b0ac40886dea1d.bundle.js.map