import React from 'react'
import {htmlcode} from './store/code'
function Code() {
    
    return (
        <div>
            <div className="w-full bg-white h-80 overflow-auto">
                <div className="container mx-auto p-4">
                    <pre>
                        <code>
                            {htmlcode}
                        </code>
                    </pre>
               
                </div>
            </div>
            
        </div>
    )
}

export default Code
