import request from 'supertest';
import * as http from 'http';
import { DailyTrendsApp } from '../../../src/DailyTrendsApp';
import { NewsPaperDto } from '../../../src/modules/news-paper/dtos/news-paper.dto';


describe('Pruebas E2E para el modulo de news-paper', () => {
    const URL = '/news-paper'
    let app: http.Server | undefined
    let dailyTrendsApp: DailyTrendsApp

    let id: string

    const bodyRequest = {
        "name": "El Mundo",
        "url": "https://www.elmundo.es",
        "articleSection": "article",
        "imageSection": "img",
        "videoSection": "video",
        "urlSection": "a",
        "titleClass": ".ue-c-cover-content__headline",
        "descriptionClass": ".ue-c-cover-content__list-inline"
    }

    beforeAll(async()=>{    
        dailyTrendsApp = new DailyTrendsApp()
        dailyTrendsApp.start()
        app = dailyTrendsApp.httpServer
    })

    afterAll(async()=>{
        await dailyTrendsApp.stop()
    })

    it(`POST ${URL} Debería responder con status 201`, async () => {
        

        const response = await request(app).post(URL).send(bodyRequest)

        expect(response.status).toBe(201);
    })

    it(`POST ${URL} Debería responder con status 400, puesto que utilizo la misma url del test anterior`, async () => {
        const response = await request(app).post(URL).send(bodyRequest)

        expect(response.status).toBe(400);
    })

    it(`GET ${URL} Debería responder con status 200 y devolver un array de objetos cumpliendo con el dto`, async () => {
        const response = await request(app).get(URL);
        const dtoInstance = new NewsPaperDto('name', 'url', 'articleSection', 'imageSection', 'videoSection', 'urlSection', 'titleClass', 'descriptionClass');
        const dtoProperties = Object.getOwnPropertyNames(dtoInstance);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array)
        expect(response.body.length).toBeGreaterThan(0);
        response.body.forEach((item: any) => {
            id = item.id
            dtoProperties.forEach((property) => {
                
                expect(item).toHaveProperty(property);
            })
        });
    });
    
    it(`GET ${URL}/{id} Debería responder con status 200 y el elemento que coincida con el id debe cumplir con el dto`, async () => {
        const response = await request(app).get(`${URL}/${id}`);

        const dtoInstance = new NewsPaperDto('name', 'url', 'articleSection', 'imageSection', 'videoSection', 'urlSection', 'titleClass', 'descriptionClass');
        const dtoProperties = Object.getOwnPropertyNames(dtoInstance);

        expect(response.status).toBe(200);
        dtoProperties.forEach((property) => {
            expect(response.body).toHaveProperty(property);
        })

    })

    it(`PATCH ${URL}/{id} Debería responder con status 204`, async () => {
        const response = await request(app).patch(`${URL}/${id}`).send({name:"El Mundo 2"});

        expect(response.status).toBe(204);
    })

    it(`DELETE ${URL}/{id} Debería responder con status 204`, async () => {
        const response = await request(app).delete(`${URL}/${id}`);

        expect(response.status).toBe(204);
    })

});