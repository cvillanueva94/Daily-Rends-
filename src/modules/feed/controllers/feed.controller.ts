import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { FeedService } from '../services/feed.service';
import { UpdateFeedDto } from '../dtos/update-feed.dto';
import { GenericError } from '../../../shared/errors/genericerror';
import { ErrorHelper } from '../../../shared/errors/errorhelper';
import { CRUDController } from '../../../shared/controllers/crud.controller';
import { FeedDocument } from '../models/feed.document';
import { FeedDto } from '../dtos/feed.dto';
import { FeedMapper } from '../models/feed.mapper';

export class FeedController extends CRUDController<
	FeedDocument, 
	FeedDto,
	UpdateFeedDto,
	FeedMapper,
	FeedService
> { 
	constructor(){
		super(new FeedService());
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const {title, description, news} = req.body
			const updateFeedDto:UpdateFeedDto = new UpdateFeedDto(req.params.id, title, description, news);
			await this.service.update(updateFeedDto)
			res.status(httpStatus.NO_CONTENT).send();
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async myFeed(req: Request, res: Response): Promise<void> {
		const payload = await this.service.myFeed()
		res.status(httpStatus.OK).send(payload);
	}
}