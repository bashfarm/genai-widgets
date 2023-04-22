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

export async function getOrgBrandConfigs(orgID: number): Promise<
  Array<GenAIConfig>
> {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  try {
    const response = await fetch(
      `${API_URL}/get_org_brand_configs?orgID=${orgID}`,
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

export async function brandedTxt2img(brand_config_id: number, domain_config_id: number): Promise<
  Array<any>
> {
  const payload = {

    "brand_config_id": brand_config_id,
    "domain_config_id": domain_config_id,
  };

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
    body: JSON.stringify(payload),
  };
  try {
    const response = await fetch(
      `${API_URL}/brand_txt2img`,
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

export async function getDomainConfigs(): Promise<
  Array<DomainConfig>
> {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  try {
    const response = await fetch(
      `${API_URL}/get_domain_configs`,
      requestOptions
    );
    const data = await response.json();
    console.log(data)
    return data;
  } catch (e) {
    console.error(e);
  }
  return new Promise((resolve, reject) => {
    resolve([]);
  }
  );
}