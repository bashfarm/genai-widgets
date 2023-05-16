import React from 'react';

export interface Character {
  id: number;
  attributes: {
    Name: string;
    VisualDescription: string;
    AttitudeDescription: string;
    CharacterArt: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

interface CharacterListProps {
  characters: Character[];
  selectCharacter: (character: Character) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, selectCharacter }) => {
    console.log(characters);
  return (
    <div className="h-full bg-purple-900 text-white p-4 sticky top-0 neon-text">
      <h2 className="text-2xl mb-4">Characters</h2>
      {characters.map(character => (
        <button
          key={character.id}
          onClick={() => selectCharacter(character)}
          className="mb-2 p-2 bg-purple-700 text-white rounded"
        >
          {character.attributes.Name}
        </button>
      ))}
    </div>
  );
};

export default CharacterList;
