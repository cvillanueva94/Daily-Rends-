
import { NewsDto } from "../dtos/news.dto";

import NewsModel, {NewsDocument} from "./news.document";

export class NewsMapper {

    /**
     * Converts a NewsDto object to a NewsDocument object.
     *
     * @param {NewsDto} newsDto - The NewsDto object to be converted.
     * @return {NewsDocument} - The converted NewsDocument object.
     */
    DtoToDocument(newsDto: NewsDto): NewsDocument {
        const news = new NewsModel()
        
        news.title = newsDto.title;
        news.description = newsDto.description;
        news.url = newsDto.url;
        news.image = newsDto.image;
        news.video = newsDto.video;

        return news;   
    }
}