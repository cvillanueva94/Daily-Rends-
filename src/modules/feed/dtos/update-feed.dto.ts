import { ICRUDDto } from '../../../shared/interfaces/ICRUDDto';

export class UpdateFeedDto implements ICRUDDto {
    id: string;

    title: string | undefined;
    description: string | undefined;
    url: string | undefined;
        
    constructor(id: string, title?: string, description?: string, url?: string){ 
        this.id = id ;
        this.title = title;
        this.description = description;
        this.url = url;
    }
}