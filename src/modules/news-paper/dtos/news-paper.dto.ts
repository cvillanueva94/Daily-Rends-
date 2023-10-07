import {v4} from 'uuid'

import { ICRUDDto } from '../../../shared/interfaces/ICRUDDto';

export class NewsPaperDto implements ICRUDDto {
    id: string;

    name: string;
    url: string;

    createdAt: Date;
    updatedAt: Date;
        
    constructor(name: string, url: string, id?: string, createdAt?: Date, updatedAt?: Date){ 
        this.id = id || v4();
        this.name = name;
        this.url = url;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date(); 
    }
}