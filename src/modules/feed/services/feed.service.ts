
import { PaginationDto } from '../../../shared/dtos/pagination.dto';
import { CrudServices } from '../../../shared/services/crud.service';
import { FeedDto } from '../dtos/feed.dto';
import { UpdateFeedDto } from '../dtos/update-feed.dto';
import feedModel, { FeedDocument } from '../models/feed.document';
import { FeedMapper } from '../models/feed.mapper';
import { FeedRepository } from '../models/feed.repository';
import  { NewsDocument } from '../models/news.document';
import { ScraperService } from './scraper.service';

export class FeedService extends CrudServices<FeedDocument, FeedDto, UpdateFeedDto, FeedMapper> {
	scraperService: ScraperService = new ScraperService();
	
	constructor() {
		super(new FeedMapper(), new FeedRepository(feedModel));
	}	

	async myFeed() : Promise<FeedDto> {

		const startDate = new Date();
		startDate.setHours(0, 0, 0, 0);
		const endDate = new Date();
		endDate.setHours(23, 59, 59, 999);

		const pagination: PaginationDto = {
			limit: 1 , 
			offset: 0,
			filter: {
				createdAt: {
					$gte: startDate,
					$lt: endDate,
				},
			}
		}
		const existingNews = await this.list(pagination)
		let result: FeedDto

		if(!existingNews.length){
			const news: NewsDocument[] = await this.scraperService.scrapAllNewsPaper()
			// const newNews: [NewsDocument] = news.map((item:NewsDocument)=>item)/

			// TODO: refactorizar estos valores por defecto
			const DEAULT_TITLE = `Noticias de hoy ${new Date().toLocaleDateString()}`;
			const DEAULT_DESCRIPTION = `Noticias de hoy ${new Date().toLocaleDateString()}`;
			
			const feed = new FeedDto(DEAULT_TITLE, DEAULT_DESCRIPTION, news);
			const newId = await this.create(feed);
			result = await this.read(newId);
		} else {
			result = existingNews[0]
		}
		
		return result
	}
}