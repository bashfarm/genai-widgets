import React from 'react';
import GeneratedMediaSection, { MediaMeta }  from '../generated-media-section/generated-media-section';
import { BAPITxt2Img, BAPITxt2SVG } from '../../services/ai_service';
import { GenAISetting } from 'genai';
import { DEFAULT_GEN_IMAGE } from '../../constants/asset_urls';
import { ChatMessageList } from '../chat-message-list/chat-message-list';
import { set } from 'lodash';

interface Text2SVGPageProps {
    className?: string;
}

const Text2SVGPage: React.FC<Text2SVGPageProps> = ({ className }) => {
    let [isGenerating, setIsGenerating] = React.useState(false)
    let [isGenerated, setIsGenerated] = React.useState(false)
    let [generatedMedia, setGeneratedMedia] = React.useState<MediaMeta[]>([])

    const generateFromMessage = async (message: string) => {
        setIsGenerating(true)
        let ai_setting = new GenAISetting({
            prompt: message,
            model_config: "TShirt-Config"
        })
        let newMedia = {urls: [DEFAULT_GEN_IMAGE], mediaType: "image", userPrompt: message, generatedPrompt: "N/A", isBeingCreated: true } as MediaMeta
        setGeneratedMedia([...generatedMedia, newMedia] as MediaMeta[])

        let generated_media = await BAPITxt2SVG(ai_setting)
        setIsGenerating(false)

        newMedia.urls =[generated_media.image_url, generated_media.svg_url]
        newMedia.isBeingCreated = false
        setGeneratedMedia([...generatedMedia.splice(-1), newMedia] as MediaMeta[])
    }

    return (
        <div className={`flex  ${className} bg-purple-700`}>
            <div className="w-1/2 flex flex-col bg-gray-900 justify-center items-center flex-grow">
                <ChatMessageList messages={generatedMedia} className='w-full m-10' onAddMessage={(message) => generateFromMessage(message)}/>
            </div>
            <div className="w-1/2 flex flex-col bg-purple-700 justify-center items-center flex-grow">
                <GeneratedMediaSection mediaMeta={generatedMedia}/>
            </div>
        </div>
    );
};

export default Text2SVGPage;
