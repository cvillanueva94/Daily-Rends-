import { Schema, model } from "mongoose"

export interface NewsDocument extends Document {
  title: string
  description: string | undefined
  NewsPaperName: string
  url: string | undefined
  video: string | undefined
  image: string | undefined
}

const NewsSchema = new Schema<NewsDocument>({
  title: { type: String, required: true },
  description: { type: String },
  NewsPaperName: { type: String },
  url: { type: String },
  video: { type: String },
  image: { type: String },
})
export {NewsSchema}

export default model<NewsDocument>('News', NewsSchema);

