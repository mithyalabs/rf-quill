import React from "react";
import { QuillFontSizeOption } from "./RFReactQuill";
declare type ToolbarOption = "size" | "color" | "image" | "align";
interface QuillToolbarProps {
    id: string;
    toolbarOptions?: ToolbarOption[];
    customSizes?: QuillFontSizeOption[];
    formats?: QuillFormat[];
}
declare const QuillToolbar: React.FC<QuillToolbarProps>;
export declare const defaultFormats: string[];
export default QuillToolbar;
export declare const getQuillModule: (toolbarId: string) => {
    toolbar: string;
    history: {
        delay: number;
        maxStack: number;
        userOnly: boolean;
    };
    clipboard: {
        matchVisual: boolean;
    };
};
export declare type QuillFormat = "header" | "image" | "bold" | "italic" | "underline" | "strike" | "indent" | "link" | "image" | "color" | "script" | "font" | "align" | "direction" | "size" | "list" | "blockquote" | "code-block";
export declare const QUILL_FORMATS: QuillFormat[];
