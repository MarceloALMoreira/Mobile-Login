import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Users from "../pages/Users";
import Home from "../pages/Home";

export default function Routas() {
    return (

        <Router>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    )
}
