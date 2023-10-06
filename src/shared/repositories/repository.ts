import { PaginationDto } from '../dtos/pagination.dto';
import { ICRUDDocument } from '../interfaces/ICRUDDocument';
import { Model, Document } from 'mongoose';
import { ICRUDRepository } from '../interfaces/ICRUDRepository';

export class Repository<ModelType extends Document & ICRUDDocument> 
implements ICRUDRepository<ModelType> {
    constructor(private modelInstance: Model<ModelType>) {}

    async findAll(pagination: PaginationDto): Promise<ModelType[]> {
        const dto = await this.modelInstance.find().exec();
        return dto;
    }

    async findByPk(id: Number): Promise<ModelType> {
        throw new Error('Method not implemented.');
    }

    async save(model: ModelType): Promise<void> {
        await model.save();
    }

    async update(t: ModelType): Promise<void> {
        const model = await this.modelInstance.findById(t.id).exec();
        if(!model){
            throw new Error('Model not found');
        }
        await t.save()
    }
    async delete(id: Number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}