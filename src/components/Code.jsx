import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {htmlcode} from './store/code'
function Code() {
    
    return (
        <div>
            <div className="w-full bg-white h-80 overflow-auto">
                <div className="container mx-auto p-4">
                    <SyntaxHighlighter language="htmlbars" style={docco}>
                    {htmlcode}
                    </SyntaxHighlighter>
                    {/* <pre>
                        <code>
                            {htmlcode}
                        </code>
                    </pre> */}
               
                </div>
            </div>
            
        </div>
    )
}

export default Code
