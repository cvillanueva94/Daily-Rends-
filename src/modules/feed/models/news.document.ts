import { Schema, model } from "mongoose"
// import  { NewsPaperDocument } from "../../news-paper/models/news-paper.document"

export interface NewsDocument extends Document {
  // NewsPaper: NewsPaperDocument
  title: string
  description: string
  url: string | undefined
  video: string | undefined
  image: string | undefined
}

const NewsSchema = new Schema<NewsDocument>({
  // NewsPaper: {type: NewsPaper, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String },
  video: { type: String },
  image: { type: String },
})
export {NewsSchema}

export default model<NewsDocument>('News', NewsSchema);

