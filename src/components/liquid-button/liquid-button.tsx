import styles from './liquid-button.module.scss';
import classNames from 'classnames';

export interface LiquidButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-liquid-buttons-and-templates
 */
export const LiquidButton = ({ className }: LiquidButtonProps) => {
    return <div className={classNames(styles.root, className)}>LiquidButton</div>;
};
