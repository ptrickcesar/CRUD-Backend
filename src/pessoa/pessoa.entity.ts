import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pessoas')
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nome: string;

  @Column('text')
  email: string;

  @Column('int')
  idade: number;

  @Column('text')
  telefone: string;

  @Column('text')
  sexo: string;
}
