import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { NewsPaperService } from '../services/news-paper.service';
import { UpdateNewsPaperDto } from '../dtos/update-news-paper.dto';
import { GenericError } from '../../../shared/errors/genericerror';
import { ErrorHelper } from '../../../shared/errors/errorhelper';
import { CRUDController } from '../../../shared/controllers/crud.controller';
import { NewsPaperDocument } from '../models/news-paper.document';
import { NewsPaperDto } from '../dtos/news-paper.dto';
import { NewsPaperMapper } from '../models/news-paper.mapper';


export class NewsPaperController extends CRUDController<
	NewsPaperDocument, 
	NewsPaperDto,
	UpdateNewsPaperDto,
	NewsPaperMapper,
	NewsPaperService
> {
	constructor(){
		super(new NewsPaperService());
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const {name, url} = req.body
			const updateNewsPaperDto: UpdateNewsPaperDto = new UpdateNewsPaperDto(req.params.id, name, url);
			await this.service.update(updateNewsPaperDto)
			res.status(httpStatus.NO_CONTENT).send();
		} catch(e) {
			const error: GenericError = ErrorHelper.processError(e);
			res.status(error.statusCode).send(error.message);
		}
	}

}