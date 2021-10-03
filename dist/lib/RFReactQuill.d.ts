import { FormHelperTextProps, InputLabelProps } from "@material-ui/core";
import { FC } from "react";
import { IFieldProps } from "react-forms";
import "react-quill/dist/quill.snow.css";
import { QuillToolbarProps } from "./QuillToolbar";
export interface QuillFontSizeOption {
    label: string;
    value: string;
}
export interface ReactQuillFieldProps {
    name: string;
    label: string;
    labelProps: InputLabelProps;
    helperText: string;
    helperTextProps: FormHelperTextProps;
    sizes?: QuillFontSizeOption[];
    customImageUploadAdapter?: (file: any) => Promise<string>;
    toolbarProps?: Omit<QuillToolbarProps, "customSizes" | "id">;
}
export interface RichTextEditorProps extends IFieldProps {
    fieldProps?: ReactQuillFieldProps;
}
declare const RichTextEditor: FC<RichTextEditorProps>;
export default RichTextEditor;
export declare const getQuillModule: (toolbarId: string) => {
    toolbar: string;
};
