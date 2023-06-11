import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect,
  useHistory,
  useLocation,
  Navigate,
  
} from "react-router-dom";
import { getMailsFetch, getMailsFilter } from "./mailState";
import MailListing from "./components/MailListing";
import NoMatch from "./components/NoMatch";
import SideNav from "./components/SideNav";
import SearchBar from "./components/SearchBar";
import FullMail from "./components/FullMail";
import TopNav from "./components/TopNav";

import './App.css'; 

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMailsFetch());
  }, [dispatch]);
  

  return (
    <div className="App">
        <SideNav></SideNav>
        <div className="App-Body">
          <TopNav></TopNav>
        <Routes>
       <Route exact path="/" element={<Navigate to="/filter?tag=inbox" replace />}/>
          <Route path="/filter" element={<MailListing />}/>
          <Route path="/all" element={<MailListing />} />
          <Route path="/search" element={<MailListing />} />
          <Route path="/mail/:id" element={<FullMail/>}/>
          <Route path="*" element={<NoMatch />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
