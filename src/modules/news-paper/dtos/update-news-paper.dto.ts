import { ICRUDDto } from '../../../shared/interfaces/ICRUDDto';

export class UpdateNewsPaperDto implements ICRUDDto {
    id: string;

    name: string | undefined;
    url: string | undefined;

    articleSection: string | undefined; 
    imageSection: string | undefined;
    videoSection: string | undefined;
    urlSection: string | undefined;
    
    titleClass: string | undefined;
    descriptionClass: string | undefined;

    updatedAt?: Date;

        
    constructor(id: string, name?: string, url?: string, articleSection?: string, imageSection?: string, videoSection?: string, urlSection?: string, titleClass?: string, descriptionClass?: string){
        this.id = id ;
        this.name = name;
        this.url = url;
        this.articleSection = articleSection;
        this.imageSection = imageSection;
        this.videoSection = videoSection;
        this.urlSection = urlSection;
        this.titleClass = titleClass;
        this.descriptionClass = descriptionClass;
        this.updatedAt = new Date();
    }
}