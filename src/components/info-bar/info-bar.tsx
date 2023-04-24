import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './info-bar.module.scss';

interface InfoBarProps {
  message?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

const InfoBar = ({ message, icon, onClose }: InfoBarProps) => {
  const [closed, setClosed] = useState(true);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (message) {
      setClosed(false);
      setHeight(48);
      const timer = setTimeout(() => {
        setClosed(true);
        setHeight(0);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setHeight(0);
      const timer = setTimeout(() => {
        setClosed(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleClose = () => {
    setClosed(true);
    setHeight(0);

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
      style={{ height }}
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
