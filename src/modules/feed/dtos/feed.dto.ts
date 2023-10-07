import {v4} from 'uuid'

import { ICRUDDto } from '../../../shared/interfaces/ICRUDDto';

export class FeedDto implements ICRUDDto {
    id: string;

    title: string;
    description: string;
    url: string;

    createdAt: Date;
    updatedAt: Date;
        
    constructor(title: string, description: string, url: string, id?: string, createdAt?: Date, updatedAt?: Date){ 
        this.id = id || v4();
        this.title = title;
        this.description = description;
        this.url = url;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date(); 
    }
}