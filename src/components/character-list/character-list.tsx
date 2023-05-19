import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
    deleteCharacter: (character: Character) => void;
    addCharacter: () => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, selectCharacter, deleteCharacter, addCharacter }: CharacterListProps) => {
    return (
        <div className="h-full bg-purple-900 text-white p-4 sticky top-0 neon-text">
            <h2 className="text-2xl mb-4">Characters</h2>
            <div className="overflow-auto h-64">
                {characters.slice(0, 5).map((character) => (
                    <div key={character.id} className="flex justify-between items-center mb-2">
                        <button
                            onClick={() => selectCharacter(character)}
                            className="p-2 bg-purple-700 text-white rounded"
                        >
                            {character.attributes.Name}
                        </button>
                        <IconButton onClick={() => deleteCharacter(character)} size="small">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
            </div>
            <button className="mt-4 p-2 bg-green-500 text-white rounded sticky bottom-0" onClick={() => addCharacter()}>Add Character</button>
        </div>
    );
};

export default CharacterList;
