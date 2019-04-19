(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./resources/js/view/single-page/message/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.5@babel-loader/lib??ref--4-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./resources/js/view/single-page/message/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_user_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/user/msg */ "./resources/js/api/user/msg.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'message_page',
  data: function data() {
    return {
      listLoading: false,
      contentLoading: false,
      currentMessageType: 'unread',
      messageContent: '',
      messageList: [],
      showingMsgItem: {},
      messageUnreadCount: 0,
      messageReadedCount: 0,
      messageTrashCount: 0
    };
  },
  computed: {},
  methods: {
    handleSelect: function handleSelect(name) {
      this.currentMessageType = name;
    },
    handleView: function handleView(msg_id) {
      this.contentLoading = true;
      Object(_api_user_msg__WEBPACK_IMPORTED_MODULE_0__["readMsg"])(msg_id).then(function (data) {
        console.log(data);
      })["catch"](function () {});
    },
    removeMsg: function removeMsg(item) {
      item.loading = true;
      var msg_id = item.msg_id;

      if (this.currentMessageType === 'readed') {
        Object(_api_user_msg__WEBPACK_IMPORTED_MODULE_0__["delMsg"])(msg_id).then(function (data) {
          console.log(data);
        })["catch"](function () {});
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    _this.listLoading = true; // 请求获取消息列表

    Object(_api_user_msg__WEBPACK_IMPORTED_MODULE_0__["getMessageList"])().then(function (data) {
      console.log(data);
      _this.listLoading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--9-2!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message-page-con {\n  height: calc(100vh - 176px);\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n}\n.message-page-con.message-category-con {\n  border-right: 1px solid #e6e6e6;\n  width: 200px;\n}\n.message-page-con.message-list-con {\n  border-right: 1px solid #e6e6e6;\n  width: 230px;\n}\n.message-page-con.message-view-con {\n  position: absolute;\n  left: 446px;\n  top: 16px;\n  right: 16px;\n  bottom: 16px;\n  overflow: auto;\n  padding: 12px 20px 0;\n}\n.message-page-con.message-view-con .message-view-header {\n  margin-bottom: 20px;\n}\n.message-page-con.message-view-con .message-view-header .message-view-title {\n  display: inline-block;\n}\n.message-page-con.message-view-con .message-view-header .message-view-time {\n  margin-left: 20px;\n}\n.message-page-con .category-title {\n  display: inline-block;\n  width: 65px;\n}\n.message-page-con .gray-dadge {\n  background: gainsboro;\n}\n.message-page-con .not-unread-list .msg-title {\n  color: #aaa9a9;\n}\n.message-page-con .not-unread-list .ivu-menu-item .ivu-btn.ivu-btn-text.ivu-btn-small.ivu-btn-icon-only {\n  display: none;\n}\n.message-page-con .not-unread-list .ivu-menu-item:hover .ivu-btn.ivu-btn-text.ivu-btn-small.ivu-btn-icon-only {\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/index.js!./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader!./node_modules/_css-loader@1.0.1@css-loader!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--9-2!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/_css-loader@1.0.1@css-loader!../../../../../node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--9-2!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=less& */ "./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./resources/js/view/single-page/message/index.vue?vue&type=template&id=ff0ea8fa&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./resources/js/view/single-page/message/index.vue?vue&type=template&id=ff0ea8fa& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Card", { attrs: { shadow: "" } }, [
    _c("div", [
      _c(
        "div",
        { staticClass: "message-page-con message-category-con" },
        [
          _c(
            "Menu",
            {
              attrs: { width: "auto", "active-name": "unread" },
              on: { "on-select": _vm.handleSelect }
            },
            [
              _c(
                "MenuItem",
                { attrs: { name: "unread" } },
                [
                  _c("span", { staticClass: "category-title" }, [
                    _vm._v("未读消息")
                  ]),
                  _c("Badge", {
                    staticStyle: { "margin-left": "10px" },
                    attrs: { count: _vm.messageUnreadCount }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "MenuItem",
                { attrs: { name: "readed" } },
                [
                  _c("span", { staticClass: "category-title" }, [
                    _vm._v("已读消息")
                  ]),
                  _c("Badge", {
                    staticStyle: { "margin-left": "10px" },
                    attrs: {
                      "class-name": "gray-dadge",
                      count: _vm.messageReadedCount
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "MenuItem",
                { attrs: { name: "trash" } },
                [
                  _c("span", { staticClass: "category-title" }, [
                    _vm._v("回收站")
                  ]),
                  _c("Badge", {
                    staticStyle: { "margin-left": "10px" },
                    attrs: {
                      "class-name": "gray-dadge",
                      count: _vm.messageTrashCount
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "message-page-con message-list-con" },
        [
          _vm.listLoading
            ? _c("Spin", { attrs: { fix: "", size: "large" } })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "Menu",
            {
              attrs: { width: "auto", "active-name": "" },
              on: { "on-select": _vm.handleView }
            },
            _vm._l(_vm.messageList, function(item) {
              return _c(
                "MenuItem",
                { key: "msg_" + item.msg_id, attrs: { name: item.msg_id } },
                [
                  _c(
                    "div",
                    [
                      _c("p", { staticClass: "msg-title" }, [
                        _vm._v(_vm._s(item.title))
                      ]),
                      _vm._v(" "),
                      _c("Badge", {
                        attrs: { status: "default", text: item.create_time }
                      }),
                      _vm._v(" "),
                      _c("Button", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.currentMessageType !== "unread",
                            expression: "currentMessageType !== 'unread'"
                          }
                        ],
                        staticStyle: { float: "right", "margin-right": "20px" },
                        style: {
                          display: item.loading ? "inline-block !important" : ""
                        },
                        attrs: {
                          loading: item.loading,
                          size: "small",
                          icon:
                            _vm.currentMessageType === "readed"
                              ? "md-trash"
                              : "",
                          title:
                            _vm.currentMessageType === "readed" ? "删除" : "",
                          type: "text"
                        },
                        nativeOn: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.removeMsg(item)
                          }
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "message-page-con message-view-con" },
        [
          _vm.contentLoading
            ? _c("Spin", { attrs: { fix: "", size: "large" } })
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "message-view-header" }, [
            _c("h2", { staticClass: "message-view-title" }, [
              _vm._v(_vm._s(_vm.showingMsgItem.title))
            ]),
            _vm._v(" "),
            _c("time", { staticClass: "message-view-time" }, [
              _vm._v(_vm._s(_vm.showingMsgItem.create_time))
            ])
          ]),
          _vm._v(" "),
          _c("div", { domProps: { innerHTML: _vm._s(_vm.messageContent) } })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/user/msg.js":
/*!**************************************!*\
  !*** ./resources/js/api/user/msg.js ***!
  \**************************************/
/*! exports provided: getMessageList, readMsg, delMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessageList", function() { return getMessageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readMsg", function() { return readMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delMsg", function() { return delMsg; });
/* harmony import */ var _libs_api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/api.request */ "./resources/js/libs/api.request.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/common */ "./resources/js/common/common.js");
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/index */ "./resources/js/router/index.js");


 // 消息列表

var getMessageList = function getMessageList() {
  return _libs_api_request__WEBPACK_IMPORTED_MODULE_0__["default"].request({
    url: '/api/user/getMessageList',
    method: "get"
  });
}; // 阅读

var readMsg = function readMsg(id) {}; // 删除 消息

var delMsg = function delMsg(id) {};

/***/ }),

/***/ "./resources/js/view/single-page/message/index.vue":
/*!*********************************************************!*\
  !*** ./resources/js/view/single-page/message/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ff0ea8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ff0ea8fa& */ "./resources/js/view/single-page/message/index.vue?vue&type=template&id=ff0ea8fa&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/view/single-page/message/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=less& */ "./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ff0ea8fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ff0ea8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/single-page/message/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/single-page/message/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/view/single-page/message/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_5_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_babel-loader@8.0.5@babel-loader/lib??ref--4-0!../../../../../node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./resources/js/view/single-page/message/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_5_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_style-loader@0.23.1@style-loader!../../../../../node_modules/_css-loader@1.0.1@css-loader!../../../../../node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--9-2!../../../../../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!../../../../../node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=less& */ "./node_modules/_style-loader@0.23.1@style-loader/index.js!./node_modules/_css-loader@1.0.1@css-loader/index.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./resources/js/view/single-page/message/index.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_2_node_modules_less_loader_4_1_0_less_loader_dist_cjs_js_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/view/single-page/message/index.vue?vue&type=template&id=ff0ea8fa&":
/*!****************************************************************************************!*\
  !*** ./resources/js/view/single-page/message/index.vue?vue&type=template&id=ff0ea8fa& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff0ea8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ff0ea8fa& */ "./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./resources/js/view/single-page/message/index.vue?vue&type=template&id=ff0ea8fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff0ea8fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff0ea8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);