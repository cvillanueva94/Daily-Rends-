
import { CrudServices } from '../../../shared/services/crud.service';
import { FeedDto } from '../dtos/feed.dto';
import { UpdateFeedDto } from '../dtos/update-feed.dto';
import feedModel, { FeedDocument } from '../models/feed.document';
import { FeedMapper } from '../models/feed.mapper';
import { FeedRepository } from '../models/feed.repository';
import  { NewsDocument } from '../models/news.document';
// import { NewsDocument } from '../models/news.interface';
import { ScraperService } from './scraper.service';
export class FeedService extends CrudServices<FeedDocument, FeedDto, UpdateFeedDto, FeedMapper> {
	scraperService: ScraperService = new ScraperService();
	
	constructor() {
		super(new FeedMapper(), new FeedRepository(feedModel));
	}	

	async myFeed() : Promise<FeedDto> {
		const news: NewsDocument[] = await this.scraperService.scrapAllNewsPaper()
		// const newNews: [NewsDocument] = news.map((item:NewsDocument)=>item)/

		const DEAULT_TITLE = `Noticias de hoy ${new Date().toLocaleDateString()}`;
		const DEAULT_DESCRIPTION = `Noticias de hoy ${new Date().toLocaleDateString()}`;
		const URL_DEFAULT = 'https://www.eluniversal.com.mx/';
		
		const feed = new FeedDto(DEAULT_TITLE, DEAULT_DESCRIPTION, URL_DEFAULT,  news);

		const newId = await this.create(feed);
		return this.read(newId);
	}
}