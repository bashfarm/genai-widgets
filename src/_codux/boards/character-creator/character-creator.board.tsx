import { createBoard } from '@wixc3/react-board';
import CharacterCreator from '../../../components/character-creator/character-creator';

export default createBoard({
    name: 'CharacterCreator',
    Board: () => <CharacterCreator characters={[]} />
});
