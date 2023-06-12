import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/SideNav.module.css";



import SideNavLink from "./SideNavLink";
const SideNav = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.sideNavCont}>
      <nav>
        <div className={styles.logo} onClick={() => navigate('/')}>inMail</div>
        <SideNavLink></SideNavLink>
      </nav>
    </div>
  );
};

export default SideNav;
