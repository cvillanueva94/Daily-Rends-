import { Scraper } from '../../../lib/scraper';
import { NewsPaperService } from '../../news-paper/services/news-paper.service';

export class ScraperService {
    private newsPaperService: NewsPaperService = new NewsPaperService();
    private scraper: Scraper | undefined;


    async scrap(newsPaperId: string): Promise<any> {
        const newsPaper = await this.newsPaperService.read(newsPaperId)
        const scraperData={
            page: new URL(newsPaper.url),

            articleSection: newsPaper.articleSection,
            imageSection: newsPaper.imageSection,            
            videoSection: newsPaper.videoSection,
            urlSection: newsPaper.urlSection,
            
            titleClass: newsPaper.titleClass,
            descriptionClass: newsPaper.descriptionClass

        }
        this.scraper = new Scraper(scraperData)
        await this.scraper.startBrowser()
        const news = await this.scraper.scrapeNewsTitles()
        return news
    }
}