import { createBoard } from '@wixc3/react-board';
import CharacterList, { Character } from '../../../components/character-list/character-list';

export default createBoard({
    name: 'CharacterList',
    Board: () => <CharacterList characters={[]} selectCharacter={function (character: Character): void {
        throw new Error('Function not implemented.');
    } } deleteCharacter={function (character: Character): void {
        throw new Error('Function not implemented.');
    } } addCharacter={function (): void {
        throw new Error('Function not implemented.');
    } } />
});
