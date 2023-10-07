import { ICRUDDocument } from "./ICRUDDocument"
import { ICRUDDto } from "./ICRUDDto"

export interface ICRUDMapper<
  D extends ICRUDDto,
  P extends ICRUDDocument,
> {

  DocumentToDto(pEntity: P): D;
  DtoToDocument(dEntity: D): Partial<P>
  UpdateDtoToDocument(dEntity: D, pEntity: P): Partial<P>
}
