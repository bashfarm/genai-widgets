export default class GenAIConfig {
  createdTime: string;
  fields: {
    Name: string;
    id: number;
    model: string;
    negative_prompt: string;
    orgID: number;
    orgName: string;
    previews: {
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
    }[];
    prompt_prefix: string;
    prompt_suffix: string;
    upscale: number;
  };
  id: string;

  constructor(data: {
    createdTime: string;
    fields: {
      Name: string;
      id: number;
      model: string;
      negative_prompt: string;
      orgID: number;
      orgName: string;
      previews: any[];
      prompt_prefix: string;
      prompt_suffix: string;
      upscale: number;
    };
    id: string;
  }) {
    this.createdTime = data.createdTime;
    this.fields = data.fields;
    this.id = data.id;
  }
}
