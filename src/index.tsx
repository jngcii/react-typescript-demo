import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/CounterClass';

if (process.env.NODE_ENV === "development") console.log("개발환경입니다.")
ReactDOM.render(<Counter name="React" />, document.getElementById('app'));
