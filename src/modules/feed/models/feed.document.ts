// src/domain/models/feed.model.ts

import {  Schema, model } from 'mongoose';
import { ICRUDDocument } from '../../../shared/interfaces/ICRUDDocument';

export interface FeedDocument extends ICRUDDocument {
  title: string;
  description: string;
  url: string;
}

const feedSchema = new Schema<FeedDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true, unique: true },
});

export default model<FeedDocument>('Feed', feedSchema);
