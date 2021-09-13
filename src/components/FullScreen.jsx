import React from 'react'
import {htmlcode} from './store/code'
function FullScreen() {
    return (
        <div>
           <div   dangerouslySetInnerHTML={{ __html: htmlcode}} />
        </div>
    )
}

export default FullScreen
