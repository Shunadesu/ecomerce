import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import path from "../utils/path";
import { Fail, Home, Public } from "../pages";
import AuthPage from "./public/AuthPage";

const Ecomerce = () => {

  return (
    <Router>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<AuthPage />}/>
        </Route>
        <Route path={path.FAIL} element={<Fail />}/>
      </Routes>
    </Router>
  )
}

export default Ecomerce

        