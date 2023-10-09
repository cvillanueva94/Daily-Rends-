import request from 'supertest';
import * as http from 'http';
import { DailyTrendsApp } from '../../../src/DailyTrendsApp';
// import { FeedDto } from '../../../src/modules/feed/dtos/feed.dto';


describe('Pruebas E2E para el modulo de feed', () => {
    let app: http.Server | undefined
    let dailyTrendsApp: DailyTrendsApp

    beforeAll(async()=>{    
        dailyTrendsApp = new DailyTrendsApp()
        dailyTrendsApp.start()
        app = dailyTrendsApp.httpServer
    })

    afterAll(async()=>{
        await dailyTrendsApp.stop()
    })

    it(`GET /my-feed Debería responder con status 200`, async () => {
        
        // Creamos un news-papper para poder obtener un feed
        await request(app).post('/news-paper').send({
            "name": "ElPais",
            "url": "https://elpais.com/america/",
            "articleSection": "article",
            "imageSection": "img",
            "videoSection": "video",
            "urlSection": "a",
            "titleClass": ".c_t",
            "descriptionClass": ".c_d"
        })

        const response = await request(app).get('/my-feed')

        console.log(response.body)
        expect(response.status).toBe(200);
    })
});