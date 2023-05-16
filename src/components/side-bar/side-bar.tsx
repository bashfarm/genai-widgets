import React, { useState } from 'react';

interface SidebarProps {
  setComponent: (component: string) => void;
}

const SideBar: React.FC<SidebarProps> = ({ setComponent }) => {
  return (
    <div className="h-full bg-purple-900 text-white p-4">
      <h2 className="text-2xl mb-4 neon-text">Novel Writing App</h2>
      <button
        onClick={() => setComponent('CharacterCreator')}
        className="mb-2 p-2 bg-purple-700 text-white rounded neon-text"
      >
        Character Creator
      </button>
      <button
        onClick={() => setComponent('GenAICard')}
        className="p-2 bg-purple-700 text-white rounded neon-text"
      >
        Gen AI Card
      </button>
    </div>
  );
};

export default SideBar;
