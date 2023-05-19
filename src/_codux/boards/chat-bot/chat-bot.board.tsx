import { createBoard } from '@wixc3/react-board';
import  ChatBot from '../../../components/chat-bot/chat-bot';

export default createBoard({
    name: 'ChatBot',
    Board: () => <ChatBot />
});
