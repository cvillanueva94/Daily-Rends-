import { CrudMapper } from "../../../shared/models/crud.mapper";
import { NewsPaperDto } from "../dtos/news-paper.dto";
import { UpdateNewsPaperDto } from "../dtos/update-news-paper.dto";
import NewsPaperModel, { NewsPaperDocument } from "./news-paper.document";

export class NewsPaperMapper extends CrudMapper<NewsPaperDocument, NewsPaperDto, UpdateNewsPaperDto>{
    /**
     * Converts a NewsPaperDocument object to a NewsPaperDto object.
     *
     * @param {NewsPaperDocument} newsPaperDocument - The NewsPaperDocument object to be converted.
     * @return {NewsPaperDto} The converted NewsPaperDto object.
     */
    DocumentToDto(newsPaperDocument: NewsPaperDocument): NewsPaperDto {
        const {id, name, url, articleSection, imageSection, videoSection, urlSection, titleClass, descriptionClass, createdAt, updatedAt} = newsPaperDocument
        const dto = new NewsPaperDto(name, url, articleSection, imageSection, videoSection, urlSection, titleClass, descriptionClass, id, createdAt, updatedAt);
        return dto
    }

    /**
     * Converts a NewsPaperDto object to a NewsPaperDocument object.
     *
     * @param {NewsPaperDto} newsPaperDto - The NewsPaperDto object to be converted.
     * @return {NewsPaperDocument} The converted NewsPaperDocument object.
     */
    DtoToDocument(newsPaperDto: NewsPaperDto): NewsPaperDocument {
        const newsPaper = new NewsPaperModel()

        newsPaper.name = newsPaperDto.name;
        newsPaper.url = newsPaperDto.url;
        newsPaper.articleSection = newsPaperDto.articleSection;
        newsPaper.imageSection = newsPaperDto.imageSection;
        newsPaper.videoSection = newsPaperDto.videoSection;
        newsPaper.urlSection = newsPaperDto.urlSection;
        newsPaper.titleClass = newsPaperDto.titleClass;
        newsPaper.descriptionClass = newsPaperDto.descriptionClass;

        return newsPaper;        
    }

    /**
     * Updates the properties of a NewsPaperDocument based on the values provided in an UpdateNewsPaperDto.
     *
     * @param {UpdateNewsPaperDto} updateNewsPaperDto - The DTO containing the updated values for the news paper.
     * @param {NewsPaperDocument} originalNewsPaper - The original NewsPaperDocument object.
     * @return {NewsPaperDocument} - The updated NewsPaperDocument object.
     */
    UpdateDtoToDocument(updateNewsPaperDto: UpdateNewsPaperDto, originalNewsPaper: NewsPaperDocument): NewsPaperDocument {
        const newsPaper = new NewsPaperModel()
        
        newsPaper.id = updateNewsPaperDto.id
        newsPaper.name = updateNewsPaperDto.name || originalNewsPaper.name;
        newsPaper.url = updateNewsPaperDto.url || originalNewsPaper.url;
        newsPaper.articleSection = updateNewsPaperDto.articleSection || originalNewsPaper.articleSection;
        newsPaper.imageSection = updateNewsPaperDto.imageSection || originalNewsPaper.imageSection;
        newsPaper.videoSection = updateNewsPaperDto.videoSection || originalNewsPaper.videoSection;
        newsPaper.urlSection = updateNewsPaperDto.urlSection || originalNewsPaper.urlSection;
        newsPaper.titleClass = updateNewsPaperDto.titleClass || originalNewsPaper.titleClass;
        newsPaper.descriptionClass = updateNewsPaperDto.descriptionClass || originalNewsPaper.descriptionClass;

        return newsPaper;
        
    }
}