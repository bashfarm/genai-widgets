import { createBoard } from '@wixc3/react-board';
import GenAICard from '../../../components/gen-ai-card/gen-ai-card';

export default createBoard({
    name: 'GenAICard',
    Board: () => <GenAICard description={'yolodfdfg s'} />,
});
