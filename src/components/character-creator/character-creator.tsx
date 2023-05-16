import styles from './character-creator.module.scss';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import CharacterList, { Character } from '../character-list/character-list';


interface CharacterCreatorProps {
    characters: Character[];
    character?: Character;
  }

const CharacterCreator: React.FC<CharacterCreatorProps> = ({ characters, character }) => {
    const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
  
    useEffect(() => {
      if (character) {
        setCurrentCharacter(character);
      }
    }, [character]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentCharacter) {
      setCurrentCharacter({ ...currentCharacter, attributes: { ...currentCharacter.attributes, Name: event.target.value } });
    }
  };

  const handleVisualDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentCharacter) {
      setCurrentCharacter({ ...currentCharacter, attributes: { ...currentCharacter.attributes, VisualDescription: event.target.value } });
    }
  };

  const handleAttitudeDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentCharacter) {
      setCurrentCharacter({ ...currentCharacter, attributes: { ...currentCharacter.attributes, AttitudeDescription: event.target.value } });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your logic here to handle the updated character
    console.log(currentCharacter);
  };

  return (
    <div className="flex">
    <CharacterList characters={characters} selectCharacter={setCurrentCharacter} />
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl mb-4">Character Creator</h2>
      <input
        type="text"
        placeholder="Character Name"
        value={currentCharacter?.attributes.Name || ''}
        onChange={handleNameChange}
        className="mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Visual Description"
        value={currentCharacter?.attributes.VisualDescription || ''}
        onChange={handleVisualDescriptionChange}
        className="mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Attitude Description"
        value={currentCharacter?.attributes.AttitudeDescription || ''}
        onChange={handleAttitudeDescriptionChange}
        className="mb-4 p-2 border rounded"
      />
      <button type="submit" className="mt-4 p-2 bg-green-500 text-white rounded">
        Update Character
      </button>
    </form>
    </div>
  );
};

export default CharacterCreator;
