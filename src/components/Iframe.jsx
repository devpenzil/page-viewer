import React from 'react'

function Iframe() {
    return (
        <div>
             <iframe src="../../src/htmlpage/page.html" 
                    className="h-full mx-auto"
                    >
                        {/* <div
                        dangerouslySetInnerHTML={{
                            __html: htmlcode
                        }}></div> */}
                        {/* https://flaviocopes.com/how-to-render-html-react/ */ }
                        {/* style={{width:`${width}px`}} */}
        </iframe>
        </div>
    )
}

export default Iframe
