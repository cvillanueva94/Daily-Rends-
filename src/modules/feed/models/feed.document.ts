// src/domain/models/feed.model.ts

import {  Schema, model } from 'mongoose';
import { ICRUDDocument } from '../../../shared/interfaces/ICRUDDocument';
import { NewsSchema,  NewsDocument } from './news.document';

export interface FeedDocument extends ICRUDDocument {
  title: string;
  description: string;
  url: string;
  news: NewsDocument[];
}

const feedSchema = new Schema<FeedDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  news: { type: [NewsSchema], default: [], required: true }
});

export default model<FeedDocument>('Feed', feedSchema);
