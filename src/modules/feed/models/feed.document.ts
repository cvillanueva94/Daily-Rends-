// src/domain/models/feed.model.ts

import {  Schema, model } from 'mongoose';
import { ICRUDDocument } from '../../../shared/interfaces/ICRUDDocument';
import { NewsSchema,  NewsDocument } from './news.document';

export interface FeedDocument extends ICRUDDocument {
  title: string;
  description: string;
  news: NewsDocument[];
}

const feedSchema = new Schema<FeedDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  news: { type: [NewsSchema], default: [], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<FeedDocument>('Feed', feedSchema);
