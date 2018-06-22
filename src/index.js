import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import {skills, eduList, jobsList} from './data/datasource.js'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App skillList={skills} eduList={eduList} jobList={jobsList} />, document.getElementById('root'));
registerServiceWorker();
