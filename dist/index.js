'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactForms = require('react-forms');
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var _ = _interopDefault(require('lodash'));
var ReactQuill = require('react-quill');
var ReactQuill__default = _interopDefault(ReactQuill);
require('react-quill/dist/quill.snow.css');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var DEFAULT_FONT_SIZE = "16px";

var QuillToolbar = function (props) {
    var _a = props.toolbarOptions, toolbarOptions = _a === void 0 ? ["align", "color", "image", "size", "indents", "lists"] : _a, customSizes = props.customSizes, formats = props.formats;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { id: props.id },
            toolbarOptions.includes("size") && customSizes
                ? getCustomSizeOptions(customSizes)
                : Size,
            React__default.createElement("span", { className: "ql-formats" },
                formats
                    ? formats.map(function (format) {
                        return (React__default.createElement("button", { key: format, className: "ql-" + format }));
                    })
                    : Formatting,
                toolbarOptions.includes("color") && Color),
            toolbarOptions.includes("image") && Image,
            toolbarOptions.includes("align") && Align,
            toolbarOptions.includes("indents") && Indents,
            toolbarOptions.includes("lists") && Lists)));
};
var Image = React__default.createElement("button", { className: "ql-image" });
var Color = React__default.createElement("input", { id: "color", type: "color", className: "ql-color" });
var getCustomSizeOptions = function (customSizes) {
    if (!customSizes.length) {
        return null;
    }
    return (React__default.createElement("select", { className: "ql-size" }, customSizes.map(function (size, index) { return (React__default.createElement("option", { style: { fontSize: size.value }, key: size.value, selected: index === 0, value: size.value },
        size.label,
        " (",
        size.value,
        ")")); })));
};
var defaultFormats = ["bold", "italic", "underline", "link"];
var Size = (React__default.createElement("select", { className: "ql-size", defaultValue: "" + DEFAULT_FONT_SIZE },
    React__default.createElement("option", { value: "34px" }, "Heading 1 (34px) "),
    React__default.createElement("option", { value: "24px" }, "Heading 2 (24px) "),
    React__default.createElement("option", { value: "20px" }, "Heading 3 (20px) "),
    React__default.createElement("option", { value: "16px" }, "Body 1 (16px) "),
    React__default.createElement("option", { value: "14px" }, "Body 2 (14px) "),
    React__default.createElement("option", { value: "11px" }, "Body 3 (11px) ")));
var Lists = (React__default.createElement("span", { className: "ql-formats" },
    React__default.createElement("button", { className: "ql-list", value: "ordered" }),
    React__default.createElement("button", { className: "ql-list", value: "bullet" })));
var Indents = (React__default.createElement("span", { className: "ql-formats" },
    React__default.createElement("button", { className: "ql-indent", value: "-1" }),
    React__default.createElement("button", { className: "ql-indent", value: "+1" })));
var Formatting = (React__default.createElement(React__default.Fragment, null, defaultFormats.map(function (format) { return (React__default.createElement("button", { key: format, className: "ql-" + format })); })));
var Align = (React__default.createElement("span", { className: "ql-formats" },
    React__default.createElement("button", { className: "ql-direction", value: "rtl" }),
    React__default.createElement("select", { className: "ql-align" })));

var RichTextEditor = function (props) {
    var fieldConfig = props.fieldConfig, _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var label = fieldProps.label, labelProps = fieldProps.labelProps, helperText = fieldProps.helperText, helperTextProps = fieldProps.helperTextProps, sizes = fieldProps.sizes, _c = fieldProps.toolbarProps, toolbarProps = _c === void 0 ? {} : _c, name = fieldProps.name, restFieldProps = __rest(fieldProps, ["label", "labelProps", "helperText", "helperTextProps", "sizes", "toolbarProps", "name"]);
    var classes = useStyles();
    React.useEffect(function () {
        var Size = ReactQuill.Quill.import("attributors/style/size");
        var Align = ReactQuill.Quill.import("attributors/style/align");
        Size.whitelist = (sizes === null || sizes === void 0 ? void 0 : sizes.map(function (size) { return size.value; })) || [
            "11px",
            "12px",
            "14px",
            "16px",
            "18px",
            "20px",
            "24px",
            "34px",
        ];
        ReactQuill.Quill.register(Size, true);
        ReactQuill.Quill.register(Align, true);
    }, [sizes]);
    var quillRef = React.useRef(null);
    var value = _.get(formikProps, "values." + name) || "";
    var errorText = reactForms.getFieldError(name, formikProps);
    var showColorPicker = function (value) {
        var _a;
        var quill = (_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getEditor();
        if (value === "color-picker") {
            var picker = document.getElementById("color-picker");
            if (!picker) {
                picker = document.createElement("input");
                picker.id = "color-picker";
                picker.type = "color";
                picker.style.display = "none";
                picker.value = "#FF0000";
                document.body.appendChild(picker);
                picker.addEventListener("change", function () {
                    quill === null || quill === void 0 ? void 0 : quill.format("color", picker.value);
                }, false);
            }
            picker.click();
        }
        else {
            quill === null || quill === void 0 ? void 0 : quill.format("color", value);
        }
    };
    function imageHandler() {
        var input = document.createElement("input");
        input.setAttribute("type", "file");
        input.click();
        // Listen upload local image and save to server
        input.onchange = function () {
            var _a;
            var file = (_a = input === null || input === void 0 ? void 0 : input.files) === null || _a === void 0 ? void 0 : _a[0];
            var reader = new FileReader();
            if (file) {
                reader.onload = function () {
                    var fileInfo = {
                        name: file.name,
                        type: file.type,
                        size: Math.round(file.size / 1000) + " kB",
                        base64: reader.result,
                        file: file,
                    };
                    saveToServer(fileInfo);
                };
                reader["readAsDataURL"](file);
            }
        };
    }
    var saveToServer = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        var url, quill, range;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!fieldProps.customImageUploadAdapter) return [3 /*break*/, 2];
                    return [4 /*yield*/, fieldProps.customImageUploadAdapter(file)];
                case 1:
                    url = _b.sent();
                    quill = (_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getEditor();
                    range = quill === null || quill === void 0 ? void 0 : quill.getSelection();
                    if (range)
                        quill === null || quill === void 0 ? void 0 : quill.insertEmbed(range.index, "image", url);
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        var _a;
        var quill = (_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getEditor();
        var toolbar = quill === null || quill === void 0 ? void 0 : quill.getModule("toolbar");
        toolbar.addHandler("color", showColorPicker);
        if (fieldProps.customImageUploadAdapter)
            toolbar.addHandler("image", imageHandler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var toolbarId = React__default.useMemo(function () { return ({
        toolbarId: (name + Math.random().toString(36)).replace(/[^\w]/gi, ""),
    }); }, [name]).toolbarId;
    // If toolbarId has any special characters, then the ReactQuill editor won't be able to find it and the page will fail to load.
    // Also pad an alphanumeric random string of 0-11 characters that make sure that toolbarId is unique for about 70M entries
    // https://stackoverflow.com/a/12502559/10032950
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(core.InputLabel, __assign({}, labelProps, { error: !!errorText }), label),
        React__default.createElement(QuillToolbar, __assign({}, toolbarProps, { customSizes: sizes, id: toolbarId })),
        React__default.createElement(ReactQuill__default, __assign({ ref: function (ref) {
                quillRef.current = ref;
            }, modules: getQuillModule(toolbarId), className: classes.rte, value: value, onChange: function (data) {
                var _a;
                // console.log({ data });
                // console.count("onChange");
                formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue((_a = fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.valueKey) !== null && _a !== void 0 ? _a : "", data);
            }, onFocus: function () {
                var _a;
                formikProps.setFieldTouched((_a = fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.valueKey) !== null && _a !== void 0 ? _a : "");
            } }, restFieldProps)),
        React__default.createElement(core.FormHelperText, __assign({}, helperTextProps, { error: !!errorText }),
            errorText || helperText,
            " ")));
};
var useStyles = styles.makeStyles(function () {
    return styles.createStyles({
        rte: {
            "& .ql-editor": {
                minHeight: 160,
                fontSize: DEFAULT_FONT_SIZE,
            },
            "& .ql-color .ql-picker-options [data-value=color-picker]:before": {
                content: "Pick Color",
            },
            "& .ql-color .ql-picker-options [data-value=color-picker]": {
                background: "none !important",
                width: "100% !important",
                height: "25px !important",
                textAlign: "center",
                color: "blue",
                textDecoration: "underline",
            },
        },
    });
});
var getQuillModule = function (toolbarId) {
    return {
        toolbar: "#" + toolbarId,
    };
};

reactForms.attachField('rte-quill', React__default.createElement(RichTextEditor, null));

exports.getQuillModule = getQuillModule;
//# sourceMappingURL=index.js.map
