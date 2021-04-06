import React from 'react';
import { QuillFontSizeOption, QUILL_MODULES } from './RFReactQuill';


type ToolbarOption = 'size' | 'color' | 'image' | 'align';
interface QuillToolbarProps {
	id: string;
	// variant?: 'headings' | 'size';
	toolbarOptions?: ToolbarOption[];
	customSizes?: QuillFontSizeOption[];
}

const QuillToolbar: React.FC<QuillToolbarProps> = (props) => {
	const { toolbarOptions = ['align', 'color', 'image', 'size'], customSizes } = props;

	return (<>
		<div id={props.id}>
			{toolbarOptions.includes('size') &&
				customSizes ? getCustomSizeOptions(customSizes) : Size
			}
			<span className="ql-formats">
				{Formatting}
				{toolbarOptions.includes('color') && Color}
			</span>
			{toolbarOptions.includes('image') && Image}
			{toolbarOptions.includes('align') && Align}
			{Indents}
		</div>
	</>
	);
};

const Image = (
	<button className="ql-image"></button>
);

// const Color = (
//     <select className="ql-color">
//     </select>
// )

const Color = (
	<input id="color" type="color" className="ql-color" />
);

const getCustomSizeOptions = (customSizes: QuillFontSizeOption[]) => {
	return <select className="ql-size">{customSizes.map((size, index) => <option style={{ fontSize: size.value }} key={size.value} selected={index === 0} value={size.value}>{size.label} ({size.value})</option>)}</select>;
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

const Size = (
	<select className="ql-size">
		<option value="34px" >Heading 1 (34px) </option>
		<option value="24px" >Heading 2 (24px) </option>
		<option value="20px" >Heading 3 (20px) </option>
		<option value="16px" selected>Body 1 (16px) </option>
		<option value="14px" >Body 2 (14px) </option>
		<option value="11px" >Body 3 (11px) </option>
	</select>
);
const Indents = (
	<span className="ql-formats">
		<button className="ql-list" value="ordered"></button>
		<button className="ql-list" value="bullet"></button>
		<button className="ql-indent" value="-1"></button>
		<button className="ql-indent" value="+1"></button>
	</span>
);
const Formatting = (
	<>
		<button className="ql-bold"></button>
		<button className="ql-italic"></button>
		<button className="ql-underline"></button>
		<button className="ql-link"></button>
	</>
);

const Align = (
	<span className="ql-formats">
		<button className="ql-direction" value="rtl"></button>
		<select className="ql-align"></select>
	</span>
);


export default QuillToolbar;
export const getQuillModule = (toolbarId: string) => {
	return {
		...QUILL_MODULES,
		toolbar: `#${toolbarId}`
	};
};