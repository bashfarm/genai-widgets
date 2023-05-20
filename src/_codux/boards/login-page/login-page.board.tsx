import { createBoard } from '@wixc3/react-board';
import  LoginPage  from '../../../components/login-page/login-page';

export default createBoard({
    name: 'LoginPage',
    Board: () => <LoginPage />
});
