import React from 'react';
declare type ToolbarOption = 'size' | 'color' | 'image' | 'align';
interface QuillToolbarProps {
    id: string;
    variant?: 'headings' | 'size';
    toolbarOptions?: ToolbarOption[];
}
declare const QuillToolbar: React.FC<QuillToolbarProps>;
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
