
import { CrudServices } from '../../../shared/services/crud.service';
import { FeedDto } from '../dtos/feed.dto';
import { UpdateFeedDto } from '../dtos/update-feed.dto';
import feedModel, { FeedDocument } from '../models/feed.document';
import { FeedMapper } from '../models/feed.mapper';
import { FeedRepository } from '../models/feed.repository';
export class FeedService extends CrudServices<FeedDocument, FeedDto, UpdateFeedDto, FeedMapper> {
	constructor() {
		super(new FeedMapper(), new FeedRepository(feedModel));
	}	
}