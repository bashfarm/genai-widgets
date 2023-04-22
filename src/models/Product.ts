export default class Product {
  id: string;
  size: number;
  url: string;
  type: string;
  filename: string;
  thumbnails: {
    small: Thumbnail;
    large: Thumbnail;
  };

  constructor() {
    this.id = "";
    this.size = 0;
    this.url = "";
    this.type = "";
    this.filename = "";
    this.thumbnails = {
      small: new Thumbnail(),
      large: new Thumbnail()
    };
  }
}

class Thumbnail {
  url: string;
  width: number;
  height: number;
  constructor() {
    this.url = "";
    this.width = 0;
    this.height = 0;
  }

}