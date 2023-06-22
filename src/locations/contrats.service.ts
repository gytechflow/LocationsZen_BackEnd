import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateContratDto from './dto/createContrat.dto';
import Contrat from './entities/contrat.entity';
import { UpdateContratDto } from './dto/updateContrat.dto';

@Injectable()
export class ContratsService {
  constructor(
    @InjectRepository(Contrat) private contratRepository: Repository<Contrat>,
  ) {}

  // find all
  getAllContrats() {
    return this.contratRepository.find();
  }

  // find by id
  async getContratById(id: number) {
    const contrat = await this.contratRepository.findOne({where : {id: id}});
    if (contrat) {
      return contrat;
    }

    throw new HttpException('Contrat not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createContrat(contrat: CreateContratDto) {
    console.log("inside service");
    console.log(contrat);
    const newContrat = await this.contratRepository.create(contrat);
    console.log("inside service");
    console.log(newContrat);
    await this.contratRepository.save(newContrat);

    return newContrat;
  }

  // update
  async updateContrat(id: number, post: UpdateContratDto) {
    await this.contratRepository.update(id, post);
    const updatedContrat = await this.contratRepository.findOne({where : {id: id}});
    if (updatedContrat) {
      return updatedContrat;
    }

    throw new HttpException('Contrat not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteContrat(id: number) {
    const deletedContrat = await this.contratRepository.delete(id);
    if (!deletedContrat.affected) {
      throw new HttpException('Contrat not found', HttpStatus.NOT_FOUND);
    }
  }
}