import styles from './chat-bot-page.module.scss';
import classNames from 'classnames';

export interface ChatBotPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-chat-bot-pages-and-templates
 */
export const ChatBotPage = ({ className }: ChatBotPageProps) => {
    return <div className={classNames(styles.root, className)}>ChatBotPage</div>;
};
