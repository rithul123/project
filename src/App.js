import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./Components/Course/Course";
import Logic from "./Components/Login/Logic";
import TransferData from "./Components/TransferData";
import Logindata from "./Components/Login/Logindata";
import Book from "./Components/Book/Book";
import Bookkv from "./Components/Book/Bookkv";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path={"/"} element={<Logic></Logic>}></Route>
      
      <Route path={"/Ldata"} element={<Logindata></Logindata>}></Route>
      <Route path={"/Book"} element={<Book></Book>}></Route>
      <Route path={"/Bookkv"} element={<Bookkv></Bookkv>}></Route>
      </Routes>
      </BrowserRouter>
{/* <TransferData username="Joyal" password="Skywalker" usertype="admin">/</TransferData> */}
 {/* <Logic></Logic>   */}
 {/* <Course></Course> */}

    </div>
  );
}

export default App;
