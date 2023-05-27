import { createBoard } from '@wixc3/react-board';
import  MediaDownload  from '../../../components/media-download/media-download';
import { MediaMeta } from '@/components/generated-media-section/generated-media-section';

export default createBoard({
    name: 'MediaDownload',
    Board: () => <MediaDownload mediaMeta={{} as MediaMeta} isBeingCreated={false} />
});
