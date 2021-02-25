import { FormHelperTextProps, InputLabelProps } from '@material-ui/core';
import { FC } from 'react';
import { IFieldProps } from 'react-forms';
import "react-quill/dist/quill.snow.css";
export interface ReactQuillFieldProps {
    name: string;
    format?: QuillFormat[];
    label: string;
    labelProps: InputLabelProps;
    helperText: string;
    helperTextProps: FormHelperTextProps;
}
export interface RichTextEditorProps extends IFieldProps {
    fieldProps?: ReactQuillFieldProps;
}
declare const RichTextEditor: FC<RichTextEditorProps>;
export default RichTextEditor;
export declare type QuillFormat = 'header' | 'image' | 'bold' | 'italic' | 'underline' | 'strike' | 'indent' | 'link' | 'image' | 'color' | 'script' | 'font' | 'align' | 'direction' | 'size' | 'list' | 'blockquote' | 'code-block';
export declare const QUILL_FORMATS: QuillFormat[];
export declare const QUILL_MODULES: {
    history: {
        delay: number;
        maxStack: number;
        userOnly: boolean;
    };
    clipboard: {
        matchVisual: boolean;
    };
    toolbar: (string[] | {
        size: string[];
    }[] | {
        indent: string;
    }[] | {
        align: never[];
    }[] | {
        color: string[];
    }[])[];
};
