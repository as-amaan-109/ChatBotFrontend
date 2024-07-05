import React,{useEffect} from 'react'
import Prism from 'prismjs';
import Markdown from 'markdown-to-jsx';
import "./codetheme/prism-darcula.css"
// import 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
// import 'prismjs/components/prism-cpp';
const AiResponse = (props) => {
    useEffect(()=>{
        
        Prism.highlightAll();
    },[])
  return (
    <Markdown>
        {props.children}
    </Markdown>
  )
}

export default AiResponse