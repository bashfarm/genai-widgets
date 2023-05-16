import React, { useState, useEffect } from 'react';
import GenAICard from './components/gen-ai-card/gen-ai-card';
import CharacterCreator from './components/character-creator/character-creator';
import Sidebar from './components/side-bar/side-bar';
import styles from './App.module.scss';
import { GetCharacters } from '../src/services/user_service'; // Import the GetCharacters function
import { Character } from './components/character-list/character-list';
import { useAsyncEffect } from './hooks/fetchHooks';

function App() {
    const [currentComponent, setCurrentComponent] = useState('CharacterCreator');
    const [characters, setCharacters] = useState<Character[]>([]); // Add a state for the characters

    useEffect(() => {
        // Call the async function
    }, []); // The empty array means this effect runs once when the component mounts

    let { loading, value } = useAsyncEffect(async () => {
        try {
            const _characters = await GetCharacters();
            setCharacters(_characters);
        } catch (e) {
            console.error(e);
        }
    }, []);

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <Sidebar setComponent={setCurrentComponent} />
            <div className="p-4 w-full overflow-auto flex flex-col items-center">
                <header className="bg-purple-500 p-4 neon-text w-full">
                    <h1 className="text-3xl">Novel Writing App</h1>
                </header>
                {!loading && currentComponent === 'CharacterCreator' && (
                    <CharacterCreator characters={(() => {
                        console.log(characters);
                        return characters ?? [] as Character[];
                    })() } />
                )}
                {currentComponent === 'GenAICard' && (
                    <GenAICard description="A talk epic tree with golden swords puncturing through it." />
                )}
            </div>
        </div>
    );
}

export default App;
