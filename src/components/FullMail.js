import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../Styles/mailBody.module.css";
import { capitalFirst } from "../utils/commonFunctions";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { mailsStateVal } from "../mailState";

const FullMail = () => {
  const StoreState = useSelector(mailsStateVal);
  const location = useLocation();
  const navigate = useNavigate();
  const [mailbody, setMailBody] = useState({})
  const userArr = ["Animesh", "Piyush", "Rishabh"];
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = getMonthName(currentDate.getMonth());
  const day = currentDate.getDate().toString().padStart(2, "0");

  useEffect(() => {
    const pathName = location.pathname.split('/')[2]
    if(location.state == null){
   const interm = StoreState.mails.mails.reduce((acc, crr) => {
        if(crr.id == pathName){
          acc = crr
        }
        return acc;
      },{})
      setMailBody(interm)
    }else{
      setMailBody(location?.state?.info.mail)
    }
  },[StoreState])

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);
    return date.toLocaleString([], { month: "long" });
  }
  const goback = () => {
    navigate(-1);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerCont}>
        <div>
          <AiOutlineArrowLeft
            onClick={() => goback()}
            className={styles.backIcon}
          />
        </div>
        <div className={styles.topCont}>
          <div className={styles.nameTag}>
            <div className={styles.name}>{userArr[mailbody.userId]}</div>
            <div className={`${styles.tag} ${styles[mailbody.tag + "-tag"]}`}>
              { mailbody.tag && capitalFirst(mailbody.tag)}
            </div>
          </div>
          <div className={styles.date}>
            {year}-{month}-{day}
          </div>
        </div>
        <div>
          <div className={styles.subject}>{mailbody.subject}</div>
          <div>{mailbody.body}</div>
          <div>
            <button className={styles.replyButton}>Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMail;
