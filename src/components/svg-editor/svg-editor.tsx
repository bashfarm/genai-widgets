import styles from './svg-editor.module.scss';
import classNames from 'classnames';

export interface SVGEditorProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-svg-editors-and-templates
 */
export const SVGEditor = ({ className }: SVGEditorProps) => {
    return <div className={classNames(styles.root, className)}>SVGEditor</div>;
};
