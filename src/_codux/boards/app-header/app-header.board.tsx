import { createBoard } from '@wixc3/react-board';
import { AppHeader } from '../../../components/app-header/app-header';

export default createBoard({
    name: 'AppHeader',
    Board: () => <AppHeader logo_url={'https://res.cloudinary.com/dxqgoyv5b/image/upload/v1676415362/bashful.ai/images/Branding/Logo/logo_1_hc5die.png'} />
});
