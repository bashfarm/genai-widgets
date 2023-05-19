import { createBoard } from '@wixc3/react-board';
import { SVGEditor } from '../../../components/svg-editor/svg-editor';

export default createBoard({
    name: 'SVGEditor',
    Board: () => <SVGEditor />
});
