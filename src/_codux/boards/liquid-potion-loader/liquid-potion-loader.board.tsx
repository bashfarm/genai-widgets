import { createBoard } from '@wixc3/react-board';
import  LiquidPotionLoader  from '../../../components/liquid-potion-loader/liquid-potion-loader';

export default createBoard({
    name: 'LiquidPotionLoader',
    Board: () => <LiquidPotionLoader />
});
