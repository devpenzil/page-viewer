import React, { useState } from "react";
import ReactSrcDocIframe from "react-srcdoc-iframe";
import Code from "./Code";
import { useHistory } from "react-router-dom";
import { htmlcode } from "./store/code";
// require   './htmlpage/page.html'

function Home() {
  const [width, setWidth] = useState("576");
  const [code, setCode] = useState(false);
  const [copy, setCopy] = useState("copy")
  const history = useHistory();
  const copycode = () => {
    navigator.clipboard.writeText(htmlcode)
    setCopy("copied")
  }
  return (
    <div className="my-20">
      <div className="container mx-auto  border border-gray-300 rounded-sm ">
        <div className="top-bar flex flex-row justify-between p-4">
          <div className="flex space-x-8 text-sm">
            <button
              onClick={() => {
                setWidth("360");
              }}
            >
              <i class="ri-cellphone-line text-xl"></i> <br />
              xs
            </button>
            <button
              onClick={() => {
                setWidth("576");
              }}
            >
              <i class="ri-smartphone-line text-xl"></i> <br /> sm
            </button>
            <button
              onClick={() => {
                setWidth("768");
              }}
            >
              <i class="ri-tablet-line text-xl"></i> <br /> md
            </button>
            <button
              onClick={() => {
                setWidth("992");
              }}
            >
              <i class="ri-macbook-line text-xl"></i> <br /> lg
            </button>
            <button
              onClick={() => {
                setWidth("1200");
              }}
            >
              <i class="ri-mac-line text-xl"></i> <br /> xl
            </button>
          </div>
          <div className="flex space-x-4 text-sm">
            <button
              onClick={() => {
                history.push("/fullscreen");
              }}
              className="flex flex-row items-center border px-4 border-gray-200 hover:shadow-lg"
            >
              <i class="ri-fullscreen-exit-fill"></i> &nbsp; Full screen preview
            </button>
            <button className="flex flex-row items-center border px-4 border-gray-200 hover:shadow-lg">
              <i class="ri-download-line"></i> &nbsp; Download
            </button>
            <button
              onClick={() => setCode(!code)}
              className="flex flex-row items-center border px-4 border-gray-200 hover:shadow-lg"
            >
              <i class="ri-code-view"></i> &nbsp; Source Code
            </button>
            <button onClick={copycode} className="flex flex-row items-center border px-4 border-gray-200 hover:shadow-lg">
              <i class="ri-file-copy-line"></i> &nbsp; {copy}
            </button>
          </div>
        </div>
        <div className="h-96 bg-gray-200 overflow-x-auto">
          {code ? <Code /> : ""}
       
          <ReactSrcDocIframe
            srcDoc={htmlcode ? htmlcode : ""}
            style={{ width: `${width}px`, margin: "auto", height: "100%" }}
          />

        </div>
      </div>
    </div>
  );
}

export default Home;
