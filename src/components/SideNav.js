import React from "react";

import styles from "../Styles/SideNav.module.css";



import SideNavLink from "./SideNavLink";
const SideNav = () => {
  
  return (
    <div className={styles.sideNavCont}>
      <nav>
        <div className={styles.logo}>inMail</div>
        <SideNavLink></SideNavLink>
      </nav>
    </div>
  );
};

export default SideNav;
