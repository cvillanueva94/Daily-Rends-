import { NewsPaperDto } from '../dtos/news-paper.dto';
import newPaperModel, { NewsPaperDocument } from '../models/news-paper.document';
import { NewsPaperMapper } from '../models/news-paper.mapper';
import { CrudServices } from '../../../shared/services/crud.service';
import { UpdateNewsPaperDto } from '../dtos/update-news-paper.dto';
import { NewsPaperRepository } from '../models/news-paper.repository';

export class NewsPaperService extends CrudServices<NewsPaperDocument ,NewsPaperDto,UpdateNewsPaperDto, NewsPaperMapper> {
	constructor() {
		super(new NewsPaperMapper(), new NewsPaperRepository(newPaperModel));
	}	
}