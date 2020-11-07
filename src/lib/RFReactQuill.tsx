import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import _ from 'lodash';
import React, { FC } from 'react';
import { IFieldProps } from 'react-forms';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";



export interface ReactQuillProps {
    name: string,
    format?: QuillFormat[]
}

export interface RichTextEditorProps extends IFieldProps {
    fieldProps?: ReactQuillProps;
}

const RichTextEditor: FC<RichTextEditorProps> = (props) => {
    const classes = useStyles();

    const { fieldConfig, formikProps, fieldProps = {} as ReactQuillProps } = props;

    const value = _.get(formikProps, `values.${fieldProps.name}`) || '';

    return (
        <ReactQuill
            formats={QUILL_FORMATS}
            modules={QUILL_MODULES}
            className={classes.rte}
            value={value}
            onChange={data => formikProps?.setFieldValue(fieldConfig?.valueKey || '', data)}
            {...fieldProps}
        />
    )
}

const useStyles = makeStyles<Theme>(() => {
    return (createStyles({
        rte: {
            '& .ql-editor': {
                minHeight: 160
            }
        },
    }))
})

export default RichTextEditor

export type QuillFormat =
    'header' |
    'image' |
    'bold' | 'italic' | 'underline' | 'strike' |
    'indent' |
    'link' | 'image' | 'color' | 'script' | 'font' | 'align' |
    'direction' |
    'size' | 'list' |
    'blockquote' | 'code-block'

export const QUILL_FORMATS: QuillFormat[] = [
    'header',
    'image',
    'bold', 'italic', 'underline', 'strike',
    'indent',
    'link', 'image', 'color', 'script', 'font', 'align',
    'direction',
    'size', 'list',
    'blockquote', 'code-block'
]

export const QUILL_MODULES = {
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
        [{ 'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }]
    ],

}