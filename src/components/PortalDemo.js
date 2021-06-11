import React from 'react'
import ReactDOM from 'react-dom';
import RegularComp from './RegularComp'
const PortalDemo = () => {
    return ReactDOM.createPortal(<RegularComp/>,document.getElementById('portal-root'))
}

export default PortalDemo
