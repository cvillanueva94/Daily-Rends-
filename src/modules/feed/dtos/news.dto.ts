export class NewsDto  {
    title: string
    description: string | undefined
    NewsPaperName: string
    url: string | undefined
    video: string | undefined
    image: string | undefined
        
    constructor(title: string, description: string, NewsPaperName: string, url: string, video: string, image: string){
        this.title = title;
        this.description = description;
        this.NewsPaperName = NewsPaperName;
        this.url = url;
        this.video = video;
        this.image = image;
    }
}