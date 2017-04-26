import React from 'react';
import ReactDom from 'react-dom';
//package.json里显示已经装包好，所以拿进来直接用
let age=20;
let mes='HEllo'
let hello =<div>
<label htmlFor='name'>姓名{mes.toLowerCase()}</label>
<input placeholder='de' id='name'/>
<p className='pe'>fgr{age+100}</p>
</div>
ReactDom.render(hello,document.getElementById('root'))
