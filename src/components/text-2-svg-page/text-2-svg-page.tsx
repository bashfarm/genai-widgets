import React from 'react';
import Chatbot from '../chat-bot/chat-bot';
import GenAICard from '../gen-ai-card/gen-ai-card';

interface Text2SVGPageProps {
    className?: string;
}

const Text2SVGPage: React.FC<Text2SVGPageProps> = ({ className }) => {
    return (
        <div className={`flex ${className}`}>
            <div className="w-1/2 h-full">
                <Chatbot />
            </div>
            <div className="w-1/2 h-full">
                <GenAICard description="A talk epic tree with golden swords puncturing through it." />
            </div>
        </div>
    );
};

export default Text2SVGPage;
