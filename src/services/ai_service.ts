import { GenAISetting } from 'genai';

import DomainConfig from '@/models/DomainConfig';
import GenAIConfig from '@/models/GenAIConfig';

import {
  BashfulAPIImg2ImgRequest,
  BashfulAPITxt2ImgRequest,
  BashfulImageAPIResponse,
  ModelConfigResponse,
} from '../models/SDAPI';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Accept', 'application/json');
// add additional headers here to disable CORS
// myHeaders.append('Access-Control-Allow-Origin', '*');

const AUTO1111_API_URL = 'http://127.0.0.1:7860';
const API_URL = "https://us-central1-bashful-marketplace-381512.cloudfunctions.net";

const calling_application = 'Bashful: The AI Powered Photoshop Plugin';


/**
 * This function is used to generate image using the bashful image api
 *
 * @returns {Object}
 */
export async function BAPIImg2Img(
  imgb64Str: string,
  genAISetting: GenAISetting
): Promise<BashfulImageAPIResponse> {
  try {
    const payload: BashfulAPIImg2ImgRequest = {
      init_images: [imgb64Str],
      denoising_strength: genAISetting.getDenoisingStrength(),
      prompt: genAISetting.prompt,
      seed: genAISetting.seed,
      guidance: genAISetting.getStylingStrength(),
      styling_strength: genAISetting.getStylingStrength(),
      negative_prompt: genAISetting.negativePrompt,
      model_config: genAISetting.model_config,
      calling_application: calling_application,
    };

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: 'follow',
    };
    const response = await fetch(
      `${API_URL}/img2img`,
      requestOptions
    );

    const data = response.json();

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

/**
 * This function is used to generate image using the bashful image api
 *
 * @returns {Object}
 */
export async function BAPITxt2Img(
  genAISetting: GenAISetting
): Promise<BashfulImageAPIResponse> {
  try {
    console.log('genAISetting', genAISetting);
    const payload: BashfulAPITxt2ImgRequest = {
      prompt: genAISetting.prompt,
      seed: genAISetting.seed,
      guidance: genAISetting.stylingStrength,
      styling_strength: genAISetting.stylingStrength,
      negative_prompt: genAISetting.negativePrompt,
      model_config: genAISetting.model_config,
      calling_application: calling_application,
    };

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: 'follow',
    };
    const response = await fetch(
      `${API_URL}/txt2img`,
      requestOptions
    );

    const data = response.json();

    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

/**
 * This will retrieve and up to date list of models from the API!  We even get the file path of the model.  Very useful if we
 * want to manage their models too!
 * @returns
 */
export async function getAvailableModelConfigs(): Promise<
  Array<ModelConfigResponse>
> {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  try {
    const response = await fetch(
      `${API_URL}/get_model_configs`,
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
  return new Promise((resolve, reject) => {
    resolve([]);
  }
  );
}



