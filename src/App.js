import { AppBar, Typography } from "@mui/material";
import FabIntegrationSnackbar from "./components/appbar";
import SkeletonColor from "./components/open";
import Markdown from "./components/pro";
import MyComponent from "./components/skel";
import SkeletonWithText from "./components/skel";
import SkeletonText from "./components/kel";
import ResponsiveAppBar from "./components/appbar";
import ButtonAppBar from "./components/appbar";
import DrawerAppBar from "./components/appbar";
import { blue } from "@mui/material/colors";
import Header from "./components/header";
import Social from "./components/Social";
import Godfather from "./components/About";
import Marky from "./components/ter";
import hii from "./assets/hii.jpg";
function App() {
  return (
    <div className="App">
      
      {/* <SkeletonColor /> */}
      
      {/* <ButtonAppBar /> */}
      {/* <DrawerAppBar /> */}
      <AppBar style={{color:'orange',backgroundColor:'grey',textAlign:'center'}}>
        <Typography>
          <h1>Naveen's Markdown Viewer</h1>
        </Typography>
      </AppBar>
      <Header/>
      {/* <AppBar>
       <h1 style={{textAlign:'center',color:'orange'}}>NMV</h1>
      </AppBar> */}
      {/* <SkeletonWithText /> */}
      <SkeletonText />
      
      <Markdown />
      <a href="https://react.dev/learn/react-developer-tools"><button>submit</button></a>
      <h1 style={{backgroundColor:'lightblue',textAlign:'center'}}>About</h1>
      {/* <Godfather/> */}
      <div className="you">
      <img src={hii} style={{width:'50vw',paddingLeft:'450px',backgroundColor:'white'}}></img>
      <p style={{backgroundColor:'white'}}>A Markdown viewer is a tool that allows you to see the formatted output of Markdown code. Markdown is a lightweight markup language used for creating formatted text documents that can be easily converted to HTML. Markdown code uses simple syntax such as asterisks, underscores, and pound signs to indicate formatting options like bold text, headers, and lists.

A Markdown viewer takes Markdown code as input and displays the formatted output in real-time.</p>
</div>
 <p style={{backgroundColor:'white'}}>This can be very useful for writers, bloggers, and web developers who want to preview how their content will look before publishing it.
 </p>
 <p style={{backgroundColor:'white'}}> By using a Markdown viewer, you can easily see how your Markdown code will be rendered in HTML and make any necessary adjustments to your content.

Many Markdown viewers also offer additional features like syntax highlighting, live editing, and the ability to export your content to various formats like HTML, PDF, or even Word documents. Some popular Markdown viewers include Dillinger, StackEdit, and Typora.

Overall, a Markdown viewer is a handy tool for anyone who regularly works with Markdown and wants to quickly and easily preview their content.</p>
     <div style={{backgroundColor:'grey'}}>
      <h1 style={{color:'black',textAlign:'center'}}>Contact:</h1>
      <Social/>
      </div>
    </div>
  )
}

export default App;