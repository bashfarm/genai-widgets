import { createBoard } from '@wixc3/react-board';
import { ChatMessageList } from '../../../components/chat-message-list/chat-message-list';

export default createBoard({
    name: 'ChatMessageList',
    Board: () => <ChatMessageList />
});
