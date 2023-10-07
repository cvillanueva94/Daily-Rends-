import { ICRUDDto } from '../../../shared/interfaces/ICRUDDto';

export class UpdateNewsPaperDto implements ICRUDDto {
    id: string;

    name: string | undefined;
    url: string | undefined;
        
    constructor(id: string, name?: string, url?: string){ 
        this.id = id ;
        this.name = name;
        this.url = url;
    }
}