import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { Pessoa } from './pessoa.entity';
import { PessoaService } from './pessoa.service';

@Controller('pessoas')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get()
  async findAll() {
    return await this.pessoaService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params) {
    return await this.pessoaService.findOne(params.id);
  }

  @Post()
  async create(@Body() pessoa: Pessoa) {
    return await this.pessoaService.create(pessoa);
  }

  @Put(':id')
  async update(@Body() pessoa: Pessoa, @Param() params) {
    return await this.pessoaService.update(params.id, pessoa);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.pessoaService.delete(params.id);
  }
}
