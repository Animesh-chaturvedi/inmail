import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { mailsStateVal } from "../mailState";
import { handleFilterMail, handleSearchMail } from "../utils/filterFunctions";
import styles from "../Styles/mailList.module.css";
import { capitalFirst } from "../utils/commonFunctions";

function MailListing() {
  const StoreState = useSelector(mailsStateVal);
  const [filteredMail, setFilteredMail] = useState([]);
  const userArr = ["Animesh", "Piyush", "Rishabh"];


  const location = useLocation();
  const navigate = useNavigate();
  const appliedTag = new URLSearchParams(location.search).get("tag");
  const searchTerm = new URLSearchParams(location.search).get("term");

  useEffect(() => {
    switch (location.pathname) {
      case "/filter":
        {
          setFilteredMail(handleFilterMail(StoreState.mails.mails, appliedTag));
        }
        break;
      case "/search":
        {
          setFilteredMail(handleSearchMail(StoreState.mails.mails, searchTerm));
        }
        break;
      default: {
        setFilteredMail(StoreState.mails.mails);
      }
    }
  }, [location.pathname, location.search, StoreState.mails]);
  


  const handleOpenMail =(mail) => {
    navigate(`/mail/${mail.id}`, {state:{info:{mail:mail, name:userArr[mail.userId]}}} )
  }

  return (
    <div className={styles.outerCont}>
      {
        StoreState.isLoading && <div className={styles.Loading}>Loading...</div>
      }
      {
       !StoreState.isLoading && filteredMail.length === 0 && <div className={styles.noResult}>No mail body or title matched your search.</div>
      }
      {!StoreState.isLoading && filteredMail.length > 0 && filteredMail.map((mail) => (
        <div style={{overflow:"hidden"}} key={mail.id} onClick={()=>handleOpenMail(mail)}>
          <div className={styles.mailsCont}>
          <div className={styles.mailLeft }>
            <div className={styles.sideDiv}></div>
            <div className={styles.name}> {userArr[mail.userId]}</div>
            <div className={`${styles.tag} ${styles[mail.tag+'-tag']}`}>{capitalFirst(mail.tag)}</div>
          </div>
          <div className={styles.mailRight}>
            <b>{mail.subject}</b>-{mail.body}
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default MailListing;
