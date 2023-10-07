import { Request, Response, Router } from 'express';

import { NewsPaperController } from './controllers/news-paper.controller';

export const register = (router: Router): void => {
	const newsPaperController: NewsPaperController = new NewsPaperController();

	router.get('/news-paper', (req: Request, res: Response) => newsPaperController.list(req, res));
	router.post('/news-paper', (req: Request, res: Response) => newsPaperController.create(req, res));
	router.patch('/news-paper/:id', (req: Request, res: Response) => newsPaperController.update(req, res));
	router.get('/news-paper/:id', (req: Request, res: Response) => newsPaperController.read(req, res));
	router.delete('/news-paper/:id', (req: Request, res: Response) => newsPaperController.delete(req, res));
};