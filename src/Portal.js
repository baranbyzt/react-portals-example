

import React from 'react';
import ReactDOM from 'react-dom'
import './Portal.css';

function Portal(){
    
let portal_root = document.getElementById('portal-root');

let close_portal = () => {
    portal_root.style.visibility="hidden";
}

    return ReactDOM.createPortal(
<div className='portal_div'>

<h1>this is portal</h1>
<p className='btn_portal' onClick={close_portal}><i class="fas fa-times"></i></p>


</div>,document.getElementById('portal-root')
)

}


export default Portal



