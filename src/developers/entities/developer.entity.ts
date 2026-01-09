import { identity } from "rxjs";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('developers')
export class Developer {

    @PrimaryGeneratedColumn() 
    id: string; 

    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    dateOfBirth: string;

}
