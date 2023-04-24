import { createBoard } from '@wixc3/react-board';
import GlowLoaderButton from '../../../components/glow-loader-button/glow-loader-button';

export default createBoard({
    name: 'GlowLoaderButton',
    Board: () => <GlowLoaderButton onClick={async () => {}}>Generate{null}</GlowLoaderButton>,
});
