import { useState } from 'react';
import classNames from 'classnames';

import styles from './info-bar.module.scss';

interface InfoBarProps {
  message: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

const InfoBar = ({ message, icon, onClose }: InfoBarProps) => {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);

    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={classNames(
        styles.root,
        closed ? styles.closed : styles.open
      )}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.message}>{message}</div>
      <button className={styles.close} onClick={handleClose}>
        <span className="sr-only">Close</span>
        <svg
          className={styles.closeIcon}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 0 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default InfoBar;