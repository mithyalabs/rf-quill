import React, { useEffect, useRef } from 'react';
import { getFieldError, attachField } from 'react-forms';
import { InputLabel, FormHelperText } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
    var _a = props.variant, variant = _a === void 0 ? 'headings' : _a, _b = props.toolbarOptions, toolbarOptions = _b === void 0 ? ['align', 'color', 'image', 'size'] : _b;
    return (React.createElement("div", { id: props.id },
        toolbarOptions.includes('size') &&
            variant === 'headings' ? Heading : Size,
        React.createElement("span", { className: "ql-formats" },
            Formatting,
            toolbarOptions.includes('color') && Color),
        toolbarOptions.includes('image') && Image,
        toolbarOptions.includes('align') && Align,
        Indents));
};
var Image = (React.createElement("button", { className: "ql-image" }));
// const Color = (
//     <select className="ql-color">
//     </select>
// )
var Color = (React.createElement("input", { id: "color", type: "color", className: "ql-color" }));
var Heading = (React.createElement("span", { className: "ql-formats" },
    React.createElement("select", { className: "ql-header" },
        React.createElement("option", { value: "1" }, "Heading 1"),
        React.createElement("option", { value: "2" }, "Heading 2"),
        React.createElement("option", { value: "3" }, "Heading 3"),
        React.createElement("option", { selected: true, value: "" }, "Normal"))));
var Size = (React.createElement("select", { className: "ql-size" },
    React.createElement("option", { value: "12px" }, "Small"),
    React.createElement("option", { selected: true, value: "14px" }, "Medium"),
    React.createElement("option", { value: "18px" }, "Large")));
var Indents = (React.createElement("span", { className: "ql-formats" },
    React.createElement("button", { className: "ql-list", value: "ordered" }),
    React.createElement("button", { className: "ql-list", value: "bullet" }),
    React.createElement("button", { className: "ql-indent", value: "-1" }),
    React.createElement("button", { className: "ql-indent", value: "+1" })));
var Formatting = (React.createElement(React.Fragment, null,
    React.createElement("button", { className: "ql-bold" }),
    React.createElement("button", { className: "ql-italic" }),
    React.createElement("button", { className: "ql-underline" }),
    React.createElement("button", { className: "ql-link" })));
var Align = (React.createElement("span", { className: "ql-formats" },
    React.createElement("button", { className: "ql-direction", value: "rtl" }),
    React.createElement("select", { className: "ql-align" })));
var getQuillModule = function (toolbarId) {
    return __assign(__assign({}, QUILL_MODULES), { toolbar: "#" + toolbarId });
};

var RichTextEditor = function (props) {
    var classes = useStyles();
    useEffect(function () {
        var Size = Quill.import('attributors/style/size');
        var Align = Quill.import('attributors/style/align');
        Size.whitelist = ['12px', '14px', '16px', '18px', '20px'];
        console.log({ Size: Size, Align: Align });
        Quill.register(Size, true);
        Quill.register(Align, true);
    }, []);
    var quillRef = useRef(null);
    var fieldConfig = props.fieldConfig, _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var label = fieldProps.label, labelProps = fieldProps.labelProps, helperText = fieldProps.helperText, helperTextProps = fieldProps.helperTextProps;
    var name = fieldProps.name;
    var value = _.get(formikProps, "values." + name) || '';
    var errorText = getFieldError(name, formikProps);
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
    useEffect(function () {
        var _a;
        var quill = (_a = quillRef.current) === null || _a === void 0 ? void 0 : _a.getEditor();
        var toolbar = quill === null || quill === void 0 ? void 0 : quill.getModule('toolbar');
        toolbar.addHandler('color', showColorPicker);
    }, []);
    console.log({ name: name });
    return (React.createElement(React.Fragment, null,
        React.createElement(InputLabel, __assign({}, labelProps, { error: !!errorText }),
            " ",
            label,
            " "),
        React.createElement(QuillToolbar, { variant: "size", id: name }),
        React.createElement(ReactQuill, __assign({ ref: function (ref) { quillRef.current = ref; }, formats: QUILL_FORMATS, modules: getQuillModule(name), className: classes.rte, value: value, onChange: function (data) { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue((fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.valueKey) || '', data); } }, fieldProps)),
        React.createElement(FormHelperText, __assign({}, helperTextProps, { error: !!errorText }),
            " ",
            errorText || helperText,
            " ")));
};
var useStyles = makeStyles(function () {
    return (createStyles({
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

attachField('rte-quill', React.createElement(RichTextEditor, null));

export { QUILL_FORMATS, QUILL_MODULES };
//# sourceMappingURL=index.es.js.map
