import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {loadDevTools} from 'jira-dev-tool' //基于service worker的后端代理服务 项目右下角的齿轮 ，无需再运行json-server
import { AppProviders } from 'context';

loadDevTools(() => ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
    <App />
    </AppProviders>
    
  </React.StrictMode>,
  document.getElementById('root')
))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
