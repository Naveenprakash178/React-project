// import React, { useState } from 'react';
// // import { marked } from '';
// // import './Superstar.css';  
// // import HideAppBar from './AppHead';
// import ReactMarkdown from "react-markdown";
// import { Button } from '@material-ui/core';

// function Marky() {        
//   const defaultInput = "## This is some markdown\n### Consider making your own\n\n#### List items\n- REACT\n- C/C++\n- JAVA\n- PYTHON\n\n#### Make it *bold* or make it italic\n\n#### ";

//   const [markdown, setMarkdown] = useState(defaultInput);
//   const [isEditable, setIsEditable] = useState(false);

//   function handleChange(event) {
//     setMarkdown(event.target.value);
//   }

//   function toggleEdit() {
//     setIsEditable(!isEditable);
//   }

//   return (          
//     <div>    
//       <div style={{textAlign:"center"}}>
//         {/* <HideAppBar/> */}
//         {isEditable ? (
//           <Button  onClick={toggleEdit} variant="outlined" color="secondary">CLOSE TERMINAL</Button>
//         ) : (
//           <Button style={{marginBottom:"15vh"}} onClick={toggleEdit} variant="outlined" color="primary">OPEN TERMINAL</Button>
//         )}
//       </div>
//       {isEditable && (
//         <div className="kamal">   
//           <div className="left">
//             <textarea
//               value={markdown}
//               onChange={handleChange}
//               style={{backgroundColor:"#031d44",color:"#ffffff",fontSize:"1.2rem"}}
//             />
//           </div>
//           <div className="right">   
//             <iframe
//               title="Preview"
//               srcDoc={marked(markdown)}  
//             />     
//           </div>
//         </div>
//       )}   
//       <div id="msanthosh">   
//       click to learn Markdown Language! &nbsp; &nbsp;
//      <Button variant="outlined" color="primary" href='https://rmarkdown.rstudio.com/' target='_blank'> CLICK</Button>
  
//       </div>     

//       <div style={{textAlign:"center",backgroundColor:"#023e8a"}}>
//       <h1>EXplore About Me!!</h1>  
//       <div id="about_me">    
//       <Button  id="mass"></Button>  
//       <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//       <Button  id="mass" ><a href='https://github.com/MSANTHOSH2002?tab=repositories'>GITHUB</a></Button>
//       </div>
      
         
//       </div>   

//     </div>       
//   );
// }

// export default Marky;