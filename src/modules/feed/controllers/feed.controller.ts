import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ICRUDController } from '../../../shared/interfaces/ICRUDController';
import { FeedService } from '../services/feed.service';
import { PaginationDto } from '../../../shared/dtos/pagination.dto';
import { UpdateFeedDto } from '../dtos/update-feed.dto';
import { GenericError } from '../../../shared/errors/genericerror';
import { ErrorHelper } from '../../../shared/errors/errorhelper';
import { ScraperService } from '../services/scraper.service';

export class FeedController implements ICRUDController {
	
	feedServices: FeedService = new FeedService();
	scraperService: ScraperService = new ScraperService()

	async list(req: Request, res: Response): Promise<void> {
		try {
			const pagination: PaginationDto = {
				limit: 10, 
				offset: 0
			}
			const payload = await this.feedServices.list(pagination)
			res.status(httpStatus.OK).send(payload);
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async create(req: Request, res: Response): Promise<void> {		
		try {
			await this.feedServices.create(req.body)
			res.status(httpStatus.CREATED).send();
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const {title, description, url, news} = req.body
			const updateFeedDto:UpdateFeedDto = new UpdateFeedDto(req.params.id, title, description, url, news);
			await this.feedServices.update(updateFeedDto)
			res.status(httpStatus.NO_CONTENT).send();
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async read(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.feedServices.read(req.params.id)
			res.status(httpStatus.OK).send(result);
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.feedServices.delete(req.params.id)
			res.status(httpStatus.NO_CONTENT).send(result);
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async myFeed(req: Request, res: Response): Promise<void> {
		const payload = await this.feedServices.myFeed()
		res.status(httpStatus.OK).send(payload);
	}
}