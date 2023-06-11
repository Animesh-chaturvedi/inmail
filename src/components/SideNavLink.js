import React,{useEffect} from 'react';
import {
    AiOutlineInbox,
    AiOutlineEdit,
    AiOutlineDelete,
    AiOutlineFileExclamation,
    AiOutlineMail,
  } from "react-icons/ai";
  import { capitalFirst } from "../utils/commonFunctions";
  import { NavLink } from "react-router-dom";
  import { useSelector } from "react-redux";
  import { mailsStateVal } from "../mailState";
  import styles from "../Styles/sideNavLink.module.css"
  import { useLocation } from "react-router-dom";

const SideNavLink = (props) => {
    const location = useLocation();
    const appliedTag = new URLSearchParams(location.search).get("tag");
    const StoreState = useSelector(mailsStateVal);
    const groupNum = StoreState.mails.mailGroups;
    const mailsLen = StoreState.mails.mails.length
    const NavLinks = {
        inbox: {
          icon: <AiOutlineInbox className={styles.navIcon} />,
          text: "inbox",
        },
        draft: {
          icon: <AiOutlineEdit className={styles.navIcon} />,
          text: "draft",
        },
        trash: {
          icon: <AiOutlineDelete className={styles.navIcon} />,
          text: "trash",
        },
        spam: {
          icon: <AiOutlineFileExclamation className={styles.navIcon} />,
          text: "spam",
        },
        all: {
          icon: <AiOutlineMail className={styles.navIcon} />,
          text: "all",
        },
      };

      const handleClick = (e) => {
        if(props.onClose){
            props.onClose()
        }
      }
    return (
        <ul className={styles.listStyle}>
          {Object.keys(NavLinks).map((link) => {
            return (
              <li key={link}>
                <NavLink
                  to={`${link === 'all'?`all`: `/filter?tag=${link}`}`}
                  className={`${styles.navLinkSt} ${
                    appliedTag === link || `/${NavLinks[link].text}` == location.pathname ? styles.active : ""
                  }`}
                  onClick={(e)=>handleClick(e)}
                >
                  <span>
                    {" "}
                    {NavLinks[link].icon}
                    <span className={styles.navText}>
                      {capitalFirst(NavLinks[link].text)}
                    </span>
                  </span>
                  <span className={styles.nums}>
                    {link === 'all'? mailsLen :groupNum[link]}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
    );
};

export default SideNavLink;