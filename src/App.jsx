
import { Router } from "@reach/router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Help from "./Pages/Help";
import ClockPoge from "./Pages/ClockPoge";
import Tasks from "./Pages/Tasks";
function App() {
  return (
   <Router>
     <Home path="/"/>
    <About path="/about" />
    <Help path="/help" />
    <ClockPoge path="/clock" />
    <Tasks path="/tasks" />
   </Router>
  )
}

export default App;