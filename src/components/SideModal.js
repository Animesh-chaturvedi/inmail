import React from 'react';
import styles from "../Styles/sideModal.module.css"
import SideNavLink from './SideNavLink';

const SideModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.sideModalOverlay} onClick={onClose}>
      <div className={styles.sideModalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.filter}>Filters</div>
        <SideNavLink onClose={() =>onClose()} />
      </div>
    </div>
  );
};

export default SideModal;