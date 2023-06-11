import React, { useState } from "react";
import SearchBar from "./SearchBar";
import styles from "../Styles/topNav.module.css";
import { useWindowSize } from "../utils/commonFunctions";
import SideModal from "./SideModal";

const TopNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const size = useWindowSize();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.TopNavCont}>
      {size.width < 900 && <div className={styles.logo}>inMail</div>}
      <div className={styles.innerCont}>
        <SearchBar></SearchBar>
        {size.width < 900 && (
          <span>
            <button onClick={openModal} className={styles.openModal}>Filters</button>
            <SideModal isOpen={isModalOpen} onClose={closeModal} />
          </span>
        )}
      </div>
    </div>
  );
};

export default TopNav;
