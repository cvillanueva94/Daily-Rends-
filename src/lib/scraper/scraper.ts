import  {Browser} from 'puppeteer';
import {startBrowser} from './browser'
import { GenericError } from '../../shared/errors/genericerror';
import { NewsPaperDataInterface } from './interfaces';
import Logger from '../logger';



export class Scraper {
    browser: Browser | undefined
    NewsPaperData: NewsPaperDataInterface

    
    /**
     * Initializes a new instance of the class.
     *
     * @param {NewsPaperDataInterface} NewsPaperData - The data for the newspaper.
     */
    constructor(NewsPaperData: NewsPaperDataInterface) {
        this.NewsPaperData = NewsPaperData
    }

    /**
     * Starts the browser.
     *
     * @return {Promise<void>} - A promise that resolves when the browser has started successfully.
     */
    async startBrowser() {
        // Call the startBrowser function and assign the returned browser object to the 'browser' property of the current object
        this.browser = await startBrowser();

        // Check if the browser object is falsy
        if (!this.browser) {
            // Create a new GenericError object with a message and status code
            const error = new GenericError('Impossible to start the browser', 400);
            
            // Throw the error
            throw error;
        }
    }

    /**
     * Scrapes news titles from a webpage.
     *
     * @return {Array} An array of objects containing the scraped data.
     */
    async scrapeNewsTitles() : Promise<any> {
        // Check if the browser is available
        if (!this.browser) {
            // Throw an error if the browser is not available
            const error = new GenericError('Impossible to start the browser', 400);
            throw error;
        }

        // Create a new page in the browser
        const browserPage = await this.browser.newPage();

        await browserPage.setCookie();

        // Go to the specified webpage
        await browserPage.goto(this.NewsPaperData.page.href);

        // Get all the articles on the webpage
        const articles = await browserPage.$$(this.NewsPaperData.articleSection);
        
        let articleData = [];

        // Loop through each article
        for (const article of articles) {
            try{
            // Get the URL of the article
            const linkElement = await article.$(this.NewsPaperData.urlSection);
            let url;
            if (linkElement) {
                url = await linkElement.evaluate((element) =>  element.getAttribute('href'));
            }

            // Get the image of the article
            const imageElement = await article.$(this.NewsPaperData.imageSection);
            let image;
            if (imageElement) {
                image = await imageElement.evaluate((element) => element.getAttribute("src"));
            }

            // Get the video of the article
            const videoElement = await article.$(this.NewsPaperData.videoSection);
            let video;
            if (videoElement) {
                video = await videoElement.evaluate((element) => element.getAttribute('src'));
            }

            // Get the title of the article
            const title = await article.$eval(this.NewsPaperData.titleClass, (element) => element.textContent);
            
            // Get the description of the article
            const descriptionElement = await article.$(this.NewsPaperData.descriptionClass);
            const description = descriptionElement ? await descriptionElement.evaluate((element) => element.textContent) : null;

            // Create an object to store the article data
            const articleObject = {
                title,
                description,
                url,
                image,
                video
            };

            // Add the article object to the array
            articleData.push(articleObject);
            } catch(e) {
                Logger.error(e)   
            }
        }

        // Close the browser
        await this.browser.close();

        // Filter out articles without a description
        articleData = articleData.filter(item => item.description);

        // Return the scraped article data
        return articleData;
    }
}