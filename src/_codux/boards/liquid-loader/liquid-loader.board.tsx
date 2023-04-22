import { createBoard } from '@wixc3/react-board';
import  LiquidLoader  from '../../../components/liquid-loader/liquid-loader';

export default createBoard({
    name: 'LiquidLoader',
    Board: () => <LiquidLoader />,
    environmentProps: {
        canvasWidth: 5,
    },
});
