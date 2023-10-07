import { ICRUDDocument } from "./ICRUDDocument"
import { ICRUDDto } from "./ICRUDDto"

export abstract class ICRUDMapper<
  D extends ICRUDDto,
  P extends ICRUDDocument,
> {
  DocumentToDto(pEntity: P): D {
    throw new Error('Method not implemented.');
  }
  DtoToDocument(dEntity: D): Partial<P> {
    throw new Error('Method not implemented.');
  }
}
