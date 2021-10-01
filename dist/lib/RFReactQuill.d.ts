import { FormHelperTextProps, InputLabelProps } from "@material-ui/core";
import { FC } from "react";
import { IFieldProps } from "react-forms";
import "react-quill/dist/quill.snow.css";
import { QuillFormat } from "./QuillToolbar";
export interface QuillFontSizeOption {
    label: string;
    value: string;
}
export interface ReactQuillFieldProps {
    name: string;
    format?: QuillFormat[];
    label: string;
    labelProps: InputLabelProps;
    helperText: string;
    helperTextProps: FormHelperTextProps;
    sizes?: QuillFontSizeOption[];
    customImageUploadAdapter?: (file: any) => Promise<string>;
}
export interface RichTextEditorProps extends IFieldProps {
    fieldProps?: ReactQuillFieldProps;
}
declare const RichTextEditor: FC<RichTextEditorProps>;
export default RichTextEditor;
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
