import { useState, useEffect } from "react";
import { BAPIImg2Img, BAPITxt2Img } from "../services/ai_service";
import { GenAISetting } from "genai";

interface GenAICardProps {
  description: string;
  imgb64Str: string;
}

export function useGenerateTextImage(genAISetting: GenAISetting) {
    const [imageUrl, setImageUrl] = useState(
      "https://res.cloudinary.com/dxqgoyv5b/image/upload/v1679695129/bashful.ai/images/workflow%20assets/image_placeholder_m8updi.png"
    );
  
    const handleGenerateClick = async () => {
      try {
        const response = await BAPITxt2Img(genAISetting);
        setImageUrl(response.url);
      } catch (error) {
        console.error(error);
        // handle error here
      }
    };
  
    return { imageUrl, handleGenerateClick };
  }
  
