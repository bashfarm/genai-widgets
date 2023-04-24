import { createBoard } from '@wixc3/react-board';
import InfoBar from '../../../components/info-bar/info-bar';

export default createBoard({
    name: 'InfoBar',
    Board: () => <InfoBar message={'This is a test message'} />
});
