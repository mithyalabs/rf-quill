# RF-Quill

React forms plugin for RTE plugin made upon react quill

---

## Installation

    yarn add rf-quill react-quill

or 

    npm i rf-quill react quill

## Usage

    

1. Import 'rf-quill'

        import 'rf-quill'; 

2. Use type name as 'rte-quill' in the react form config.

        
    

``` 
    { 
        "type": "rte-quill",
        valueKey: "description", 
        fieldProps: {
            name: string,
            format?: QuillFormat[];
            label: string;
            labelProps: InputLabelProps;
            helperText: string;
            helperTextProps: FormHelperTextProps;
        }
    } 
```

## Example

``` 

<MLFormContent
    formId={'form'}
    schema={{type: "rte-quill", valueKey: "Description"}}
    actionConfig={{ displayActions: false }}
    formikProps={formikProps}
    settings={{
        verticalSpacing: 20,
        horizontalSpacing: 24
    }}
/>
```
