import { Request, Response, Router } from 'express';

import { FeedController } from './controllers/feed.controller';

export const register = (router: Router): void => {
	const feedController: FeedController = new FeedController();

	router.get('/feed', (req: Request, res: Response) => feedController.list(req, res));
	router.post('/feed', (req: Request, res: Response) => feedController.create(req, res));
	router.patch('/feed/:id', (req: Request, res: Response) => feedController.update(req, res));
	router.get('/feed/:id', (req: Request, res: Response) => feedController.read(req, res));
	router.delete('/feed/:id', (req: Request, res: Response) => feedController.delete(req, res));

	router.get('/my-feed', (req: Request, res: Response) => feedController.myFeed(req, res));
};