import { Scraper } from '../../../lib/scraper';
import { NewsPaperService } from '../../news-paper/services/news-paper.service';
import { NewsDocument } from '../models/news.document';

export class ScraperService {
	
    private newsPaperService: NewsPaperService = new NewsPaperService();
    private scraper: Scraper | undefined;
    DEFAULT_TOTAL_NEWS = 5

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

    async scrapAllNewsPaper(): Promise<NewsDocument[]> {
        let result: NewsDocument[] = []
		const allNewsPaper = await this.newsPaperService.list({ limit: 0, offset: 0 });
        for (const newsPaper of allNewsPaper) {
            let news = await this.scrap(newsPaper.id)
            result = result.concat(news.slice(0, this.DEFAULT_TOTAL_NEWS).map((item:any)=>({...item, NewsPaperName: newsPaper.name})))
        }
        return result
	}
}