import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Event extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column('varchar', { length: 100, unique: true })
	name!: string;

	@Column('timestamptz')
	date!: Date;

	/*
		Create/Update Dates
	*/
	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
