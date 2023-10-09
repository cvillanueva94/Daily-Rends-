import { FeedDto } from '../../../../src/modules/feed/dtos/feed.dto';
import { NewsDocument } from '../../../../src/modules/feed/models/news.document';

describe('Pruebas a FeedDto', () => {
    const id: string = 'id'
    const title: string = 'title';
    const description: string= 'description';
    const news: NewsDocument[] = [];
    const createdAt: Date = new Date()
    const updatedAt: Date = new Date()


  it('Comprobar el constructor de mi DTO Feed con los valores requerido', async () => {
    const dto = new FeedDto(title, description, news);
    expect(dto).toBeInstanceOf(FeedDto);
    
    expect(dto.title).toBe(title);
    expect(dto.description).toBe(description);
    expect(dto.news).toBe(news)
    expect(dto.createdAt).toBeInstanceOf(Date)
    expect(dto.createdAt).not.toBe(createdAt)
    expect(dto.updatedAt).toBeInstanceOf(Date)
    expect(dto.updatedAt).not.toBe(updatedAt)
  });

  it('Comprobar el constructor de mi DTO Feed con todos los valores', async () => {
    const dto = new FeedDto(title, description, news, id, createdAt, updatedAt);
    expect(dto).toBeInstanceOf(FeedDto);
    expect(dto.id).toBe(id);
    expect(dto.title).toBe(title);
    expect(dto.description).toBe(description);
    expect(dto.news).toBe(news);
    expect(dto.createdAt).toBeInstanceOf(Date)
    expect(dto.createdAt).toBe(createdAt)
    expect(dto.updatedAt).toBeInstanceOf(Date)
    expect(dto.updatedAt).toBe(updatedAt)
  });
});