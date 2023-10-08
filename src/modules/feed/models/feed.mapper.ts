import { ICRUDMapper } from "../../../shared/interfaces/ICRUDMapper";
import { FeedDto } from "../dtos/feed.dto";
import { UpdateFeedDto } from "../dtos/update-feed.dto";
import  FeedModel, { FeedDocument } from "./feed.document";

export class FeedMapper implements ICRUDMapper<
  FeedDto,
  FeedDocument,
  UpdateFeedDto
> {
    /**
     * Converts a FeedDocument object to a FeedDto object.
     *
     * @param {FeedDocument} feedDocument - The FeedDocument object to be converted.
     * @return {FeedDto} The converted FeedDto object.
     */
    DocumentToDto(feedDocument: FeedDocument): FeedDto {
        const {id, title, description, url, news, createdAt, updatedAt} = feedDocument
        const dto = new FeedDto(title, description, url, news, id, createdAt, updatedAt);
        return dto
    }

    /**
     * Converts a FeedDto object to a FeedDocument object.
     *
     * @param {FeedDto} feedDto - The FeedDto object to be converted.
     * @return {FeedDocument} The converted FeedDocument object.
     */
    DtoToDocument(feedDto: FeedDto): FeedDocument {
        const feed = new FeedModel()
        
        feed.title = feedDto.title;
        feed.description = feedDto.description;
        feed.url = feedDto.url;
        feed.news = feedDto.news;
        feed.createdAt = feedDto.createdAt || new Date();
        feed.updatedAt = feedDto.updatedAt || new Date();

        return feed;
        
    }

    /**
     * Updates the properties of a FeedDocument based on the values provided in an UpdateFeedDto.
     *
     * @param {UpdateFeedDto} feedDto - The DTO containing the updated values for the feed.
     * @param {FeedDocument} originalFeed - The original FeedDocument object.
     * @return {FeedDocument} - The updated FeedDocument object.
     */
    UpdateDtoToDocument(feedDto: UpdateFeedDto, originalFeed: FeedDocument): FeedDocument {
        const feed = new FeedModel()
        
        feed.id = feedDto.id
        feed.title = feedDto.title || originalFeed.title;
        feed.description = feedDto.description || originalFeed.description;
        feed.url = feedDto.url || originalFeed.url;
        feed.news = feedDto.news || originalFeed.news;
        feed.createdAt = originalFeed.createdAt;
        feed.updatedAt = feedDto.updatedAt || new Date();

        return feed;   
    }
}