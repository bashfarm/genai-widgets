import React from 'react';
import Chatbot from '../chat-bot/chat-bot';
import GeneratedMediaSection, { MediaMeta }  from '../generated-media-section/generated-media-section';
import { BAPITxt2Img } from '../../services/ai_service';
import { GenAISetting } from 'genai';
import { DEFAULT_GEN_IMAGE } from '../../constants/asset_urls';

interface Text2SVGPageProps {
    className?: string;
}

const Text2SVGPage: React.FC<Text2SVGPageProps> = ({ className }) => {
    let [isGenerating, setIsGenerating] = React.useState(false)
    let [isGenerated, setIsGenerated] = React.useState(false)
    let [generatedMedia, setGeneratedMedia] = React.useState<MediaMeta[]>([{url: DEFAULT_GEN_IMAGE, mediaType: "image"}])

    return (
        <div className={`flex  ${className}`}>
            <div className="w-1/2 flex flex-col bg-white flex-grow">
            <Chatbot 
                    sendMessage={async function (message: string) {
                    console.log("Clicked on send message")
                    console.log(message)
                    setIsGenerating(true)
                    let ai_setting = new GenAISetting({
                        prompt: message,
                        model_config: "TShirt-Config"
                    })
                    console.log("Created Setting")
                    console.log(ai_setting)
                    let generated_media = await BAPITxt2Img(ai_setting)
                    setIsGenerating(false)
                    setIsGenerated(true)
                    let generated_media_url = generated_media.url

                    console.log("AI URL")
                    console.log(generated_media)
                    setGeneratedMedia([{url: generated_media_url, mediaType: "image"}] as MediaMeta[])
                } } 
                isDisabled={isGenerating}
                />
            </div>
            <div className="w-1/2 h-full">
                <GeneratedMediaSection urls={generatedMedia}/>
            </div>
        </div>
    );
};

export default Text2SVGPage;
