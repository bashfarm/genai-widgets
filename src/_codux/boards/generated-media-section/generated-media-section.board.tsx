import { createBoard } from '@wixc3/react-board';
import GeneratedMediaSection from '../../../components/generated-media-section/generated-media-section';

export default createBoard({
    name: 'GeneratedMediaSection',
    Board: () => (
        <GeneratedMediaSection
            mediaMeta={[
                {
                    urls: ['https://res.cloudinary.com/dxqgoyv5b/image/upload/v1676415362/bashful.ai/images/Branding/Logo/logo_1_hc5die.png'],
                    mediaType: 'png',
                },
            ]}
        />
    ),
});
