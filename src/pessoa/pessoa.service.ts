import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private pessoaRepository: Repository<Pessoa>,
  ) {}

  async findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.find();
  }

  async findOne(id: number): Promise<Pessoa> {
    return this.pessoaRepository.findOne(id);
  }

  async create(pessoa: Pessoa): Promise<Pessoa> {
    return await this.pessoaRepository.save(pessoa);
  }

  async update(id: number, pessoa: Pessoa): Promise<UpdateResult> {
    return await this.pessoaRepository.update(id, pessoa);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.pessoaRepository.delete(id);
  }
}
