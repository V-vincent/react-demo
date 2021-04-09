import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'

// const element = <h1>Hello React!</h1>
// console.log(element)
// react元素：就是一个JavaScript对象

// 第一个参数：要渲染的对象
// 第二个：目标位置
ReactDOM.render(<BrowserRouter>< App /></BrowserRouter>, document.getElementById('root'))