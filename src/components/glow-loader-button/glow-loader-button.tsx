import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './glow-loader-button.module.scss';

type Props = {
    onClick: () => Promise<void>;
    children: React.ReactNode;
    className?: string;
};

const GlowLoaderButton = ({ className, onClick, children }: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log('isLoading:', isLoading);
    }, [isLoading]);

    return (
        <button
            className={classNames(styles['glow-on-hover'], className, {
                [styles['is-loading']]: isLoading,
            })}
            type="button"
            onClick={async () => {
                setIsLoading(true);
                await onClick();
                setIsLoading(false);
            }}
            disabled={isLoading}
        >
            {children}
        </button>
    );
};

export default GlowLoaderButton;
