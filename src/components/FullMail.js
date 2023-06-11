import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../Styles/mailBody.module.css";
import { capitalFirst } from "../utils/commonFunctions";
import { AiOutlineArrowLeft} from "react-icons/ai";

const FullMail = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { mail, name } = location.state.info;

  const currentDate = new Date();
  const year = currentDate.getFullYear(); 
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const goback = () => {
    navigate(-1)
  }

  return (
    <div className={styles.outerContainer}>
        <div className={styles.innerCont}>
            <div>
            <AiOutlineArrowLeft onClick={() => goback()} className={styles.backIcon} />
            </div>
      <div className={styles.topCont}>
        <div className={styles.nameTag}>
          <div className={styles.name}>{name}</div>
          <div className={`${styles.tag} ${styles[mail.tag + "-tag"]}`}>
            {capitalFirst(mail.tag)}
          </div>
        </div>
        <div className={styles.date}>Date: {year}-{month + 1}-{day}</div>
      </div>
      <div>
        <div className={styles.subject}>{mail.subject}</div>
        <div>{mail.body}</div>
        <div>
            <button className={styles.replyButton}>Reply</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FullMail;
