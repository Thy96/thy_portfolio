import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Porfolio";
import Resume from "./Pages/Resume/Resume";
import Service from "./Pages/Service/Service";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import MotionCursor from "./Component/MotionCursor/MotionCursor";
import LoadingPage from "./Component/LoadingPage/LoadingPage";

function App() {
    const [cursorVariant, setCursorVariant] = useState("default");

    const textEnter = () => {
        setCursorVariant("text");
    };

    const textLeave = () => {
        setCursorVariant("default");
    };
    return (
        <>
            <LoadingPage></LoadingPage>
            <Header textEnter={textEnter} textLeave={textLeave}></Header>

            <Routes>
                <Route
                    path="/thy_portfolio/"
                    element={
                        <Home
                            textEnter={textEnter}
                            textLeave={textLeave}
                        ></Home>
                    }
                ></Route>
                <Route path="/thy_portfolio/about" element={<About></About>}></Route>
                <Route path="/thy_portfolio/resume" element={<Resume></Resume>}></Route>
                <Route path="/thy_portfolio/service" element={<Service></Service>}></Route>
                <Route
                    path="/thy_portfolio/porfolio"
                    element={<Portfolio></Portfolio>}
                ></Route>
                <Route path="/thy_portfolio/contact" element={<Contact></Contact>}></Route>
            </Routes>

            <Footer></Footer>
            <MotionCursor cursorVariant={cursorVariant}></MotionCursor>
        </>
    );
}

export default App;
