export class NewsDto  {
    title: string
    description: string
    url: string | undefined
    video: string | undefined
    image: string | undefined
        
    constructor(title: string, description: string, url: string, video: string, image: string){
        this.title = title;
        this.description = description;
        this.url = url;
        this.video = video;
        this.image = image;
    }
}