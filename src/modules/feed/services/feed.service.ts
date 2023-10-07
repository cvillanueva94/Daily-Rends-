
import { ICRUDService } from '../../../shared/interfaces/ICRUDService';
import { FeedDto } from '../dtos/feed.dto';
import { PaginationDto } from '../../../shared/dtos/pagination.dto';
import { FeedRepository } from '../models/feed.repository';
import feedModel, { FeedDocument } from '../models/feed.document';
import { FeedMapper } from '../models/feed.mapper';
import { UpdateFeedDto } from '../dtos/update-feed.dto';
import { GenericError } from '../../../shared/errors/genericerror';
import httpStatus from 'http-status';

export class FeedSercives implements ICRUDService<FeedDto> {
	feedRepository: FeedRepository = new FeedRepository(feedModel);

	async list(pagination: PaginationDto): Promise<FeedDto[]> {
		const objects: FeedDocument[] = await this.feedRepository.findAll(pagination);
		const dtos: FeedDto[] = objects.map<FeedDto>(item => FeedMapper.DocumentToDto(item));
		return dtos
	}
	async create(dto: FeedDto): Promise<void> {
		const feed: FeedDocument = FeedMapper.DtoToDocument(dto);
		await this.feedRepository.save(feed);
	}
	async update(dto: UpdateFeedDto): Promise<FeedDto> {
		const originalFeed: FeedDocument = await this.feedRepository.findByPk(dto.id)
		const feed: FeedDocument = FeedMapper.UpdateDtoToDocument(dto, originalFeed);
		await this.feedRepository.update(feed);
		const model: FeedDocument = await this.feedRepository.findByPk(feed.id)
		const resultDTO: FeedDto = FeedMapper.DocumentToDto(model);
		return resultDTO;	
	}

	async read(id: string): Promise<FeedDto> {
		const model: FeedDocument = await this.feedRepository.findByPk(id)
		const resultDTO: FeedDto = FeedMapper.DocumentToDto(model);
		return resultDTO
	}
	async delete(id: string): Promise<void> {
		 const isDeleted = await this.feedRepository.delete(id)
		 if(!isDeleted) {
			throw new GenericError('Not found', httpStatus.NOT_FOUND)
		}
	}
	
}