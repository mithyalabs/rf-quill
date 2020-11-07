import React from 'react';
import { attachField } from 'react-forms';
import RichTextEditor from './RFReactQuill';
export * from './RFReactQuill'

attachField('rating', <RichTextEditor />);