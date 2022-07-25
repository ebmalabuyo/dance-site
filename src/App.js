import React from 'react';
import "./index.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from "./components/navigation/nav.js"
import Home from "./components/home/home.js"
import About from "./components/about/about.js"
import Lluminate from "./components/illuminate/illuminate.js"
import ScrollToTop from './ScrollToTop';
import Contact from "./components/contacts/contacts.js"

function App() {

    return (
      <Router>
            <ScrollToTop />
            <Nav/>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/illuminate" element = {<Lluminate />} />
                <Route path = "/contact" element = {<Contact />} />
            </Routes>

        </Router>
      
    )
}

export default App;
