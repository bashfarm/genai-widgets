import { createBoard } from '@wixc3/react-board';
import { StoryTeller } from '../../../components/story-teller/story-teller';

export default createBoard({
    name: 'StoryTeller',
    Board: () => <StoryTeller />
});
