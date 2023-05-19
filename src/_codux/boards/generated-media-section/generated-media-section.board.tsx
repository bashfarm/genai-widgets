import { createBoard } from '@wixc3/react-board';
import  GeneratedMediaSection  from '../../../components/generated-media-section/generated-media-section';

export default createBoard({
    name: 'GeneratedMediaSection',
    Board: () => <GeneratedMediaSection urls={[]} />
});
