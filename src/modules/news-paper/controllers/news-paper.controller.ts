import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { ICRUDController } from '../../../shared/interfaces/ICRUDController';
import { NewsPaperService } from '../services/news-paper.service';
import { PaginationDto } from '../../../shared/dtos/pagination.dto';
import { UpdateNewsPaperDto } from '../dtos/update-news-paper.dto';
import { GenericError } from '../../../shared/errors/genericerror';
import { ErrorHelper } from '../../../shared/errors/errorhelper';


export class NewsPaperController implements ICRUDController {
	newsPaperService: NewsPaperService = new NewsPaperService();

	async list(req: Request, res: Response): Promise<void> {
		try {
			const pagination: PaginationDto = {
				limit: 10, 
				offset: 0
			}
			const payload = await this.newsPaperService.list(pagination)
			res.status(httpStatus.OK).send(payload);
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async create(req: Request, res: Response): Promise<void> {		
		try {
			await this.newsPaperService.create(req.body)
			res.status(httpStatus.CREATED).send();
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const {name, url} = req.body
			const updateNewsPaperDto: UpdateNewsPaperDto = new UpdateNewsPaperDto(req.params.id, name, url);
			await this.newsPaperService.update(updateNewsPaperDto)
			res.status(httpStatus.NO_CONTENT).send();
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async read(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.newsPaperService.read(req.params.id)
			res.status(httpStatus.OK).send(result);
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.newsPaperService.delete(req.params.id)
			res.status(httpStatus.NO_CONTENT).send(result);
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}
}