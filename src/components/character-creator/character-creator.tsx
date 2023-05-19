import React, { useState, useEffect } from 'react';
import CharacterList, { Character } from '../character-list/character-list';
import { DEFAULT_GEN_IMAGE, DEVHOST } from '../../constants/asset_urls';
import { Tooltip, TextField } from '@mui/material';

interface CharacterCreatorProps {
    characters: Character[];
    character?: Character;
}

const CharacterCreator: React.FC<CharacterCreatorProps> = ({ characters, character }) => {
    const [currentCharacter, setCurrentCharacter] = useState<Character | null>(characters[0]);
    const [currentCreatorCharacters, setCurrentCreatorCharacters] =
        useState<Character[]>(characters);

    useEffect(() => {
        if (character) {
            setCurrentCharacter(character);
        }
    }, [character]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (currentCharacter) {
            setCurrentCharacter({
                ...currentCharacter,
                attributes: { ...currentCharacter.attributes, Name: event.target.value },
            });
        }
    };

    const handleVisualDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (currentCharacter) {
            setCurrentCharacter({
                ...currentCharacter,
                attributes: {
                    ...currentCharacter.attributes,
                    VisualDescription: event.target.value,
                },
            });
        }
    };

    const handleAttitudeDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (currentCharacter) {
            setCurrentCharacter({
                ...currentCharacter,
                attributes: {
                    ...currentCharacter.attributes,
                    AttitudeDescription: event.target.value,
                },
            });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add your logic here to handle the updated character
        console.log(currentCharacter);
    };
    console.log(currentCharacter);

    return (
        <div className="flex">
            <CharacterList
                characters={currentCreatorCharacters}
                selectCharacter={setCurrentCharacter}
                deleteCharacter={function (character: Character): void {
                    currentCharacter &&
                        setCurrentCreatorCharacters(
                            currentCreatorCharacters.filter((c) => c.id !== character.id)
                        );
                }}
                addCharacter={function (): void {
                    const newCharacter: Character = {
                        id: currentCreatorCharacters.length + 1,
                        attributes: {
                            Name: 'New Character',
                            VisualDescription: '',
                            AttitudeDescription: '',
                            CharacterArt: {
                                data: [
                                    {
                                        id: 1,
                                        attributes: {
                                            url: DEFAULT_GEN_IMAGE,
                                        },
                                    },
                                ],
                            },
                        },
                    };

                    setCurrentCreatorCharacters([...currentCreatorCharacters, newCharacter]);
                }}
            />
            <form onSubmit={handleSubmit} className="p-4">
                <h2 className="text-2xl mb-4">Character Creator</h2>
                {currentCharacter?.attributes.CharacterArt?.data[0]?.attributes.url && (
                    <img
                        src={
                          (() => {
                            let url = currentCharacter?.attributes.CharacterArt?.data[0]?.attributes.url
                            if(url === DEFAULT_GEN_IMAGE){
                              return url
                            } else {
                              return DEVHOST + url
                            }
                          })()
                          
                        }
                        alt="Character"
                        className="mb-4"
                        width={255}
                        height={255}
                    />
                )}
                <Tooltip title="Enter the character's name">
                    <div className="mt-5 w-full">
                        <TextField
                            label="Character Name"
                            value={currentCharacter?.attributes.Name || ''}
                            onChange={handleNameChange}
                            className="m-12 p-20"
                            fullWidth
                        />
                    </div>
                </Tooltip>
                <Tooltip title="Enter a visual description of the character">
                    <div className="mt-5 w-full">
                        <TextField
                            label="Visual Description"
                            value={currentCharacter?.attributes.VisualDescription || ''}
                            onChange={handleVisualDescriptionChange}
                            className="m-12 p-20"
                            fullWidth
                            multiline
                            rows={5}
                        />
                    </div>
                </Tooltip>
                <Tooltip title="Enter the character's attitude description">
                    <div className="mt-5 w-full">
                        <TextField
                            label="Attitude Description"
                            value={currentCharacter?.attributes.AttitudeDescription || ''}
                            onChange={handleAttitudeDescriptionChange}
                            className="m-12 p-20"
                            fullWidth
                            multiline
                            rows={5}
                        />
                    </div>
                </Tooltip>
                <button type="submit" className="mt-4 p- bg-green-500 text-white rounded">
                    Update Character
                </button>
                {/* Add a button with a react material plus icon */}
            </form>
        </div>
    );
};

export default CharacterCreator;
