import {v4} from 'uuid'

import { ICRUDDto } from '../../../shared/interfaces/ICRUDDto';
import { NewsDocument } from '../models/news.document';

export class FeedDto implements ICRUDDto {
    id: string;

    title: string;
    description: string;
    news: NewsDocument[];

    createdAt: Date;
    updatedAt: Date;
        
    constructor(title: string, description: string, news: NewsDocument[], id?: string, createdAt?: Date, updatedAt?: Date){ 
        this.id = id || v4();
        this.title = title;
        this.description = description;
        this.news = news;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date(); 
    }
}