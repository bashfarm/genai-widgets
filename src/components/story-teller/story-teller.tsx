import styles from './story-teller.module.scss';
import classNames from 'classnames';

export interface StoryTellerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-story-tellers-and-templates
 */
export const StoryTeller = ({ className }: StoryTellerProps) => {
    return <div className={classNames(styles.root, className)}>StoryTeller</div>;
};
