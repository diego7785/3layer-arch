import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  assistanceAmount: number = 0;
}
