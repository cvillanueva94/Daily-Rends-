import request from 'supertest';
import { DailyTrendsApp } from '../src/DailyTrendsApp';
import * as http from 'http';


describe('Pruebas E2E para mi aplicación DailyTrendsApp', () => {
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

  it('Debería responder con status 200 y el texto "¡Hola, mundo!" en la ruta "/"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('¡Hola, mundo!');
  });

});