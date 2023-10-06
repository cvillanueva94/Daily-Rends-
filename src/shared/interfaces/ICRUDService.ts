import { ICRUDDto } from "./ICRUDDto";
import { PaginationDto } from "../dtos/pagination.dto";

export interface ICRUDService<
Dto extends ICRUDDto
> {
	list(pagination: PaginationDto): Promise< Dto[]> | Dto[];
	create(dto: Dto): Promise<void> | void;
	update(dto: Dto): Dto;
	read(id: Number): Dto;
	delete(id: Number): Boolean;
}
