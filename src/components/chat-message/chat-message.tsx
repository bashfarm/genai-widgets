import React from 'react';

interface ChatMessageProps {
    className?: string;
    userPrompt?: string;
    generatedPrompt?: string;
    onChange?: (value: string) => void;
    onEnter?: (value: string) => void;
    disabled?: boolean;
    visible?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ className, userPrompt, generatedPrompt, onChange, onEnter, disabled, visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className={`p-4 bg-white rounded-lg shadow-lg ${className}`}>
            <label>Graphic Description</label>
            <textarea 
                value={userPrompt}
                onChange={(event) => {
                    if (onChange) {
                        onChange(event.currentTarget.value);
                    }
                }}
                className="w-full h-20 resize-none py-2 px-4 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder="Describe your graphic here..." 
                onKeyDown={(event) => {
                    if (event.key === 'Enter' && onEnter) {
                        event.preventDefault(); // Prevents adding a new line when pressing Enter
                        onEnter(event.currentTarget.value);
                    } else if (event.key === 'Enter' && !onEnter) {
                        console.warn('No onEnter handler provided to ChatMessage component.');
                    }
                }}
                disabled={disabled}
            />
        </div>
    );
};

export default ChatMessage;
