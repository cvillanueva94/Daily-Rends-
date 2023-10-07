import {v4} from 'uuid'

import { ICRUDDto } from '../../../shared/interfaces/ICRUDDto';

export class NewsPaperDto implements ICRUDDto {
    id: string;

    name: string;
    url: string;
    
    articleSection: string
    imageSection: string
    videoSection: string
    urlSection: string
    
    titleClass: string
    descriptionClass: string

    createdAt: Date;
    updatedAt: Date;
        
    constructor(name: string, url: string, articleSection: string, imageSection: string, videoSection: string, urlSection: string, titleClass: string, descriptionClass: string, id?: string, createdAt?: Date, updatedAt?: Date){ 
        this.id = id || v4();
        this.name = name;
        this.url = url;
        this.articleSection = articleSection;
        this.imageSection = imageSection;
        this.videoSection = videoSection;
        this.urlSection = urlSection;
        this.titleClass = titleClass;
        this.descriptionClass = descriptionClass;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date(); 
    }
}