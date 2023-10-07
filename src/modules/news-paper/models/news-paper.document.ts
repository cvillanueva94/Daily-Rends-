// src/domain/models/news-paper.model.ts

import {  Schema, model } from 'mongoose';
import { ICRUDDocument } from '../../../shared/interfaces/ICRUDDocument';

export interface NewsPaperDocument extends ICRUDDocument {
  name: string;
  url: string;
}

const feedSchema = new Schema<NewsPaperDocument>({
  name: { type: String, required: true },
  url: { type: String, required: true, unique: true },
});

export default model<NewsPaperDocument>('NewsPaper', feedSchema);
