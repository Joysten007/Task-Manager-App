import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home";
import RegisterPage from "./Components/RegisterPage";
import Navbar from "./Components/Navbar";
import CreateAccount from "./Components/CreateAccount";
import AboutUs from "./Components/AboutUs";
import ControlPage from "./Components/ControlPage";


function App() {
  return(
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/Navbar" element={<Navbar/>} />
            <Route path="/" element={<Home />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ControlPage" element={<ControlPage />} />
          </Routes>
        </>
      </BrowserRouter>
  )
}


function Home() {
  return (
    <div>
      <Navbar />
      <h1 style ={{textAlign: "center"}}><i>Home Page</i></h1>
      <p style ={{textAlign: "center"}}>This Task Manager App is a software application that helps with organizing, streamlining, and prioritizing tasks. It can also help with scheduling, tracking dependencies, resources, and milestones.</p>
      <img style ={{width: "100%", display:"flex", alignItems:"center"}} src="https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid" alt="intro_img"></img>
    </div>
  )
}


export default App;









// create a Task 
// edit task 
// delete task 
// update task 










// import React from "react";
// // import RegisterPage from "./Components/RegisterPage";
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<RegisterPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // };


// function App() {
//   return (
//     <>
//     <Navbar title= "Task Manager" AboutItem="About us"/>
//     <Home />
//     </>
//   )
// }

// export default App;








// import React from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// // } from "react-router-dom";
// import RegisterPage from './Components/RegisterPage';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';

// function App() {
//   return (
//     // <Router>
//       <div>
//         <Navbar title="Task Manager" AboutItem="About Us"/>
//          <Home />
//         {/* <Routes> */}
//           {/* <Route path="/about" element={<Home/>}/> */}
//             {/* Render your About component here */}
//           {/* </Route> */}
//           {/* <Route path="/">
//             // <Home />
//           </Route> */}
//           {/* <Route path="/RegisterPage" element={<RegisterPage/>} /> */}
//             {/* <RegisterPage />
//           </Route> */}
//         {/* </Routes> */}
//       </div>
//     // </Router>
//   );
// }

// export default App;




