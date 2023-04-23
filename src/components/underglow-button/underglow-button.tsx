import React from 'react';
import classNames from 'classnames';
import styles from './underglow-button.module.scss';

interface UnderglowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const UnderglowButton: React.FC<UnderglowButtonProps> = ({ className, children, ...rest }) => {
    const buttonClasses = classNames(
        styles.box,
        
        className
    );

    return (
        <div className={buttonClasses} >
            {children}
        </div>
    );
};

export default UnderglowButton;
