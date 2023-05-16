import { createBoard } from '@wixc3/react-board';
import SideBar from '../../../components/side-bar/side-bar';


export default createBoard({
    name: 'SideBar',
    Board: () => <SideBar setComponent={function (component: string): void {
        throw new Error('Function not implemented.');
    } }   />
});
