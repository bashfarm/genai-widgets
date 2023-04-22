export default class DomainConfig {
  createdTime: string;
  fields: {
    Name: string;
    NegativePrompt: string;
    PromptPrefix: string;
    PromptSuffix: string;
    "Prompt Prefix": string;
    "Prompt Suffix": string;
    "Negative Prompt": string;
    display_name: string;
    guidance: number;
    height: number;
    id: number;
    imageQuality: Array<{
      filename: string;
      height: number;
      id: string;
      size: number;
      thumbnails: {
        full: {
          height: number;
          url: string;
          width: number;
        };
        large: {
          height: number;
          url: string;
          width: number;
        };
        small: {
          height: number;
          url: string;
          width: number;
        };
      };
      type: string;
      url: string;
      width: number;
    }>;
    model: string;
    sampler: string;
    steps: number;
    upscale: number;
    width: number;
  };
  id: string;

  constructor(data: {
    createdTime: string;
    fields: {
      Name: string;
      NegativePrompt: string;
      PromptPrefix: string;
      "Prompt Prefix": string; // Add missing property
      "Prompt Suffix": string; // Add missing property
      "Negative Prompt": string; // Add missing property
      PromptSuffix: string;
      display_name: string;
      guidance: number;
      height: number;
      id: number;
      imageQuality: Array<{
        filename: string;
        height: number;
        id: string;
        size: number;
        thumbnails: {
          full: {
            height: number;
            url: string;
            width: number;
          };
          large: {
            height: number;
            url: string;
            width: number;
          };
          small: {
            height: number;
            url: string;
            width: number;
          };
        };
        type: string;
        url: string;
        width: number;
      }>;
      model: string;
      sampler: string;
      steps: number;
      upscale: number;
      width: number;
    };
    id: string;
  }) {
    this.createdTime = data.createdTime;
    this.fields = data.fields;
    this.id = data.id;
  }
}
