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

var QuillToolbar = function (props) {
    var _a = props.toolbarOptions, toolbarOptions = _a === void 0 ? ['align', 'color', 'image', 'size'] : _a, customSizes = props.customSizes;
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { id: props.id },
            toolbarOptions.includes('size') &&
                customSizes ? getCustomSizeOptions(customSizes) : Size,
            React__default.createElement("span", { className: "ql-formats" },
                Formatting,
                toolbarOptions.includes('color') && Color),
            toolbarOptions.includes('image') && Image,
            toolbarOptions.includes('align') && Align,
            Indents)));
};
var Image = (React__default.createElement("button", { className: "ql-image" }));
// const Color = (
//     <select className="ql-color">
//     </select>
// )
var Color = (React__default.createElement("input", { id: "color", type: "color", className: "ql-color" }));
var getCustomSizeOptions = function (customSizes) {
    return React__default.createElement("select", { className: "ql-size" }, customSizes.map(function (size, index) { return React__default.createElement("option", { style: { fontSize: size.value }, key: size.value, selected: index === 0, value: size.value },
        size.label,
        " (",
        size.value,
        ")"); }));
};
// const Heading = (
// 	<span className="ql-formats">
// 		<select className="ql-header">
// 			<option value="1">Heading 1</option>
// 			<option value="2">Heading 2</option>
// 			<option value="3">Heading 3</option>
// 			{/* <option value="4">Heading 4</option>
//             <option value="5">Heading 5</option>
//             <option value="6">Heading 6</option> */}
// 			<option selected value="">Normal</option>
// 		</select>
// 	</span>
// );
var Size = (React__default.createElement("select", { className: "ql-size" },
    React__default.createElement("option", { value: "34px" }, "Heading 1 (34px) "),
    React__default.createElement("option", { value: "24px" }, "Heading 2 (24px) "),
    React__default.createElement("option", { value: "20px" }, "Heading 3 (20px) "),
    React__default.createElement("option", { value: "16px", selected: true }, "Body 1 (16px) "),
    React__default.createElement("option", { value: "14px" }, "Body 2 (14px) "),
    React__default.createElement("option", { value: "11px" }, "Body 3 (11px) ")));
var Indents = (React__default.createElement("span", { className: "ql-formats" },
    React__default.createElement("button", { className: "ql-list", value: "ordered" }),
    React__default.createElement("button", { className: "ql-list", value: "bullet" }),
    React__default.createElement("button", { className: "ql-indent", value: "-1" }),
    React__default.createElement("button", { className: "ql-indent", value: "+1" })));
var Formatting = (React__default.createElement(React__default.Fragment, null,
    React__default.createElement("button", { className: "ql-bold" }),
    React__default.createElement("button", { className: "ql-italic" }),
    React__default.createElement("button", { className: "ql-underline" }),
    React__default.createElement("button", { className: "ql-link" })));
var Align = (React__default.createElement("span", { className: "ql-formats" },
    React__default.createElement("button", { className: "ql-direction", value: "rtl" }),
    React__default.createElement("select", { className: "ql-align" })));
var getQuillModule = function (toolbarId) {
    return __assign(__assign({}, QUILL_MODULES), { toolbar: "#" + toolbarId });
};

var RichTextEditor = function (props) {
    var fieldConfig = props.fieldConfig, _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var label = fieldProps.label, labelProps = fieldProps.labelProps, helperText = fieldProps.helperText, helperTextProps = fieldProps.helperTextProps, sizes = fieldProps.sizes;
    var classes = useStyles();
    React.useEffect(function () {
        var Size = ReactQuill.Quill.import('attributors/style/size');
        var Align = ReactQuill.Quill.import('attributors/style/align');
        Size.whitelist = (sizes === null || sizes === void 0 ? void 0 : sizes.map(function (size) { return (size.value); })) || ['11px', '12px', '14px', '16px', '18px', '20px', '24px', '34px'];
        ReactQuill.Quill.register(Size, true);
        ReactQuill.Quill.register(Align, true);
    }, [sizes]);
    var quillRef = React.useRef(null);
    var name = fieldProps.name;
    var value = _.get(formikProps, "values." + name) || '';
    var errorText = reactForms.getFieldError(name, formikProps);
    var showColorPicker = function (value) {
        var _a;
        var quill = (_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getEditor();
        if (value === 'color-picker') {
            var picker = document.getElementById('color-picker');
            if (!picker) {
                picker = document.createElement('input');
                picker.id = 'color-picker';
                picker.type = 'color';
                picker.style.display = 'none';
                picker.value = '#FF0000';
                document.body.appendChild(picker);
                picker.addEventListener('change', function () {
                    quill === null || quill === void 0 ? void 0 : quill.format('color', picker.value);
                }, false);
            }
            picker.click();
        }
        else {
            quill === null || quill === void 0 ? void 0 : quill.format('color', value);
        }
    };
    React.useEffect(function () {
        var _a;
        var quill = (_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getEditor();
        var toolbar = quill === null || quill === void 0 ? void 0 : quill.getModule('toolbar');
        toolbar.addHandler('color', showColorPicker);
    }, []);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(core.InputLabel, __assign({}, labelProps, { error: !!errorText }),
            " ",
            label,
            " "),
        React__default.createElement(QuillToolbar, { customSizes: sizes, id: name }),
        React__default.createElement(ReactQuill__default, __assign({ ref: function (ref) { quillRef.current = ref; }, formats: QUILL_FORMATS, modules: getQuillModule(name), className: classes.rte, value: value, onChange: function (data) { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue((fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.valueKey) || '', data); } }, fieldProps)),
        React__default.createElement(core.FormHelperText, __assign({}, helperTextProps, { error: !!errorText }),
            " ",
            errorText || helperText,
            " ")));
};
var useStyles = styles.makeStyles(function () {
    return (styles.createStyles({
        rte: {
            '& .ql-editor': {
                minHeight: 160
            },
            '& .ql-color .ql-picker-options [data-value=color-picker]:before': {
                content: 'Pick Color',
            },
            '& .ql-color .ql-picker-options [data-value=color-picker]': {
                background: 'none !important',
                width: '100% !important',
                height: '25px !important',
                textAlign: 'center',
                color: 'blue',
                textDecoration: 'underline',
            }
        },
    }));
});
var QUILL_FORMATS = [
    'header',
    'image',
    'bold', 'italic', 'underline', 'strike',
    'indent',
    'link', 'image', 'color', 'script', 'font', 'align',
    'direction',
    'size', 'list',
    'blockquote', 'code-block'
];
var QUILL_MODULES = {
    history: {
        delay: 100,
        maxStack: 200,
        userOnly: false
    },
    clipboard: {
        matchVisual: false,
    },
    toolbar: [
        [{ size: ['small', 'normal', 'large'] }],
        ['bold', 'italic', 'underline', 'strike', 'link', 'blockquote'],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        // [{ 'color': [] }],
        [{ 'align': [] }],
        ['image'],
        [{ 'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'color-picker'] }]
    ],
};

reactForms.attachField('rte-quill', React__default.createElement(RichTextEditor, null));

exports.QUILL_FORMATS = QUILL_FORMATS;
exports.QUILL_MODULES = QUILL_MODULES;
//# sourceMappingURL=index.js.map
