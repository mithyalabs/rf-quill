'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactForms = require('react-forms');
var styles = require('@material-ui/core/styles');
var _ = _interopDefault(require('lodash'));
var ReactQuill = _interopDefault(require('react-quill'));
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

var RichTextEditor = function (props) {
    var classes = useStyles();
    var quillRef = React.useRef(null);
    var fieldConfig = props.fieldConfig, formikProps = props.formikProps, _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a;
    var value = _.get(formikProps, "values." + fieldProps.name) || '';
    // const showColorPicker = (value: any) => {
    //     const quill = quillRef.current?.getEditor();
    //     if (value === 'color-picker') {
    //         var picker = document.getElementById('color-picker') as HTMLInputElement;
    //         if (!picker) {
    //             picker = document.createElement('input');
    //             picker.id = 'color-picker';
    //             picker.type = 'color';
    //             picker.style.display = 'none';
    //             picker.value = '#FF0000';
    //             document.body.appendChild(picker);
    //             picker.addEventListener('change', function () {
    //                 quill?.format('color', picker.value);
    //             }, false);
    //         }
    //         picker.click();
    //     } else {
    //         quill?.format('color', value);
    //     }
    // }
    React.useEffect(function () {
        // const quill = quillRef.current?.getEditor();
        // var toolbar = quill?.getModule('toolbar');
        // toolbar.addHandler('color', showColorPicker);
    }, []);
    return (React__default.createElement(ReactQuill, __assign({ ref: function (ref) { quillRef.current = ref; }, formats: QUILL_FORMATS, modules: QUILL_MODULES, className: classes.rte, value: value, onChange: function (data) { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue((fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.valueKey) || '', data); } }, fieldProps)));
};
var useStyles = styles.makeStyles(function () {
    return (styles.createStyles({
        rte: {
            '& .ql-editor': {
                minHeight: 160
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
        [{ 'color': [] }],
        [{ 'align': [] }],
        ['image'],
    ],
};

reactForms.attachField('rte-quill', React__default.createElement(RichTextEditor, null));

exports.QUILL_FORMATS = QUILL_FORMATS;
exports.QUILL_MODULES = QUILL_MODULES;
//# sourceMappingURL=index.js.map
