import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@CreateDateColumn({"type": "timestamp"})
	createdDate: Date

	@Column()
	name: string

	@Column()
	memberNum: string

	@Column()
	type: string

	@Column()
	requiredTime: string

	@Column('simple-array')
	term: string[]

	@Column('simple-json')
	wantingTime: {"start": string, "end": string}

	@Column('simple-array')
	hostAvailable: string[]

	@Column('simple-array')
	memberIds: string[]
}