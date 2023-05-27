import { useState } from 'react';
import ChatMessage from '../chat-message/chat-message';
import { MediaMeta } from '../generated-media-section/generated-media-section';
import { DEFAULT_GEN_IMAGE } from '../../constants/asset_urls';

export interface ChatMessageListProps {
    className?: string;
    messages?: MediaMeta[];
    onAddMessage?: (message: string) => void;
    onUpdateMessage?: (message: string) => void;
}

export const ChatMessageList = (props: ChatMessageListProps) => {
    const [messages, setMessages] = useState<MediaMeta[]>(props.messages || []);
    const [newMessage, setNewMessage] = useState('');

    const handleAddMessage = () => {
        setMessages([...messages, {urls: [DEFAULT_GEN_IMAGE], mediaType: "image", userPrompt: newMessage, generatedPrompt: "N/A", isBeingCreated: false}]);
        setNewMessage('');
        props.onAddMessage?.(newMessage);
    };

    const handleUpdateMessage = (index: number, newMessage: string) => {
        const updatedMessages = [...messages];
        updatedMessages[index].userPrompt = newMessage;
        setMessages(updatedMessages);
        props.onUpdateMessage?.(newMessage);
    };



    return (
        <div className={props.className}>
            {messages.map((message, index) => {

                return (
                <div key={index} className="mb-4 bg-transparent">
                    <ChatMessage 
                        userPrompt={message.userPrompt || ''} 
                        onChange={(value) => handleUpdateMessage(index, value)} 
                        onEnter={handleAddMessage} 
                        visible={props.messages?.length !== 0}
                        disabled={true}
                        className='m-5'
                    />
                </div>
                )
            }
            )}
            <ChatMessage 
                userPrompt={newMessage} 
                onChange={setNewMessage} 
                onEnter={handleAddMessage} 
                visible={true}
                className='m-5'
                />
                {/* <button>generate</button> */}
        </div>
    );
};
