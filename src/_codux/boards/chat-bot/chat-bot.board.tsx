import { createBoard } from '@wixc3/react-board';
import  ChatBot from '../../../components/chat-bot/chat-bot';

export default createBoard({
    name: 'ChatBot',
    Board: () => <ChatBot sendMessage={function (message: string): void {
        throw new Error('Function not implemented.');
    } } />
});
