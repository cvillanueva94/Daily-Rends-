import { NewsPaperDto } from '../../../../src/modules/news-paper/dtos/news-paper.dto';

describe('Pruebas E2E para mi aplicación Express', () => {
    const id: string = 'id'
    const name: string= 'name'
    const url: string = 'url'
    const articleSection: string = 'articleSection'
    const imageSection: string = 'imageSection'
    const videoSection: string = 'videoSection'
    const urlSection: string = 'urlSection'
    const titleClass: string = 'titleClass'
    const descriptionClass: string = 'descriptionClass'
    const createdAt: Date = new Date()
    const updatedAt: Date = new Date()


  it('Comprobar el constructor de mi DTO NewsPaper con los valores requerido', async () => {
    const dto = new NewsPaperDto(name, url, articleSection, imageSection, videoSection, urlSection, titleClass, descriptionClass);
    expect(dto).toBeInstanceOf(NewsPaperDto);
    expect(dto.name).toBe(name);
    expect(dto.url).toBe(url);
    expect(dto.articleSection).toBe(articleSection);
    expect(dto.imageSection).toBe(imageSection);
    expect(dto.videoSection).toBe(videoSection);
    expect(dto.urlSection).toBe(urlSection);
    expect(dto.titleClass).toBe(titleClass);
    expect(dto.descriptionClass).toBe(descriptionClass);
    expect(dto.createdAt).toBeInstanceOf(Date)
    expect(dto.createdAt).not.toBe(createdAt)
    expect(dto.updatedAt).toBeInstanceOf(Date)
    expect(dto.updatedAt).not.toBe(updatedAt)
  });

  it('Comprobar el constructor de mi DTO NewsPaper con todos los valores', async () => {
    const dto = new NewsPaperDto(name, url, articleSection, imageSection, videoSection, urlSection, titleClass, descriptionClass, id, createdAt, updatedAt);
    expect(dto).toBeInstanceOf(NewsPaperDto);
    expect(dto.id).toBe(id);
    expect(dto.name).toBe(name);
    expect(dto.url).toBe(url);
    expect(dto.articleSection).toBe(articleSection);
    expect(dto.imageSection).toBe(imageSection);
    expect(dto.videoSection).toBe(videoSection);
    expect(dto.urlSection).toBe(urlSection);
    expect(dto.titleClass).toBe(titleClass);
    expect(dto.descriptionClass).toBe(descriptionClass);
    expect(dto.createdAt).toBeInstanceOf(Date)
    expect(dto.createdAt).toBe(createdAt)
    expect(dto.updatedAt).toBeInstanceOf(Date)
    expect(dto.updatedAt).toBe(updatedAt)
  });
});