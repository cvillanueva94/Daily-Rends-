import { UpdateCrudDto } from '../../../shared/dtos/update-crud.dto';
export class UpdateFeedDto extends UpdateCrudDto {

    title: string | undefined;
    description: string | undefined;
    url: string | undefined;
        
    constructor(id: string, title?: string, description?: string, url?: string){ 
        super(id);
        this.title = title;
        this.description = description;
        this.url = url;
    }
}