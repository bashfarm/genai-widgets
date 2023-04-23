import { createBoard } from '@wixc3/react-board';
import UnderglowButton from '../../../components/underglow-button/underglow-button';

export default createBoard({
    name: 'UnderglowButton',
    Board: () => <UnderglowButton />,
    environmentProps: {
        canvasWidth: 48,
    },
});
