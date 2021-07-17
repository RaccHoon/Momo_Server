import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class PreTesting {
	@PrimaryColumn('uuid')
	id: string;

	@Column()
	name: string
}