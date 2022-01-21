import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa.entity';
import { PessoaController } from './pessoa.controller';

// import { pessoaProviders } from './pessoa.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  providers: [PessoaService],
  controllers: [PessoaController],
  exports: [TypeOrmModule],
})
export class PessoaModule {}
