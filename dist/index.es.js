import React, { useRef, useEffect } from 'react';
import { attachField } from 'react-forms';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import ReactQuill from 'react-quill';
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

var RichTextEditor = function (props) {
    var classes = useStyles();
    var quillRef = useRef(null);
    var fieldConfig = props.fieldConfig, formikProps = props.formikProps, _a = props.fieldProps, fieldProps = _a === void 0 ? {} : _a;
    var value = _.get(formikProps, "values." + fieldProps.name) || '';
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
    return (React.createElement(ReactQuill, __assign({ ref: function (ref) { quillRef.current = ref; }, formats: QUILL_FORMATS, modules: QUILL_MODULES, className: classes.rte, value: value, onChange: function (data) { return formikProps === null || formikProps === void 0 ? void 0 : formikProps.setFieldValue((fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.valueKey) || '', data); } }, fieldProps)));
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
