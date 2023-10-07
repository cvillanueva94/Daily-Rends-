// src/domain/models/news-paper.model.ts

import {  Schema, model } from 'mongoose';
import { ICRUDDocument } from '../../../shared/interfaces/ICRUDDocument';

export interface NewsPaperDocument extends ICRUDDocument {
  name: string;
  url: string;

  articleSection: string
  imageSection: string
  videoSection: string
  urlSection: string
  
  titleClass: string
  descriptionClass: string
}

const feedSchema = new Schema<NewsPaperDocument>({
  name: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  articleSection: { type: String, required: true },
  imageSection: { type: String, required: true },
  videoSection: { type: String, required: true },
  urlSection: { type: String, required: true },

  titleClass: { type: String, required: true },
  descriptionClass: { type: String, required: true },

});

export default model<NewsPaperDocument>('NewsPaper', feedSchema);
