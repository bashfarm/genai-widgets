import { createBoard } from '@wixc3/react-board';
import LiquidButton from '../../../components/liquid-button/liquid-button';

export default createBoard({
    name: 'LiquidButton',
    Board: () => <LiquidButton text={'test'} />
});
