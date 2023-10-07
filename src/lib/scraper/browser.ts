import puppeteer, {Browser} from 'puppeteer'
import Logger from '../logger';

export async function startBrowser(): Promise<Browser | undefined> {
	let browser;
	try {
	    Logger.info("Opening the browser......");
	    browser = await puppeteer.launch();
	} catch (err) {
	    Logger.error("Could not create a browser instance => : ", err);
	}
	return browser;
}