import { createBoard } from '@wixc3/react-board';
import  MediaDownload  from '../../../components/media-download/media-download';

export default createBoard({
    name: 'MediaDownload',
    Board: () => <MediaDownload url={''} />
});
