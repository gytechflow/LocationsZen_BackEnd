import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateFacturesBailDto from './dto/createFactureBail.dto';
import FacturesBail from './entities/factureBail.entity';
import { UpdateFactureBailDto } from './dto/updateFactureBail.dto';

@Injectable()
export class FacturesBailService {
  constructor(
    @InjectRepository(FacturesBail) private facturesBailRepository: Repository<FacturesBail>,
  ) {}

  // find all
  getAllFacturesBail() {
    return this.facturesBailRepository.find();
  }

  // find by id
  async getFactureBailById(id: number) {
    const facturesBail = await this.facturesBailRepository.findOne({where : {id: id}});
    if (facturesBail) {
      return facturesBail;
    }

    throw new HttpException('FacturesBail not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createFactureBail(facturesBail: CreateFacturesBailDto) {
    console.log("inside service");
    console.log(facturesBail);
    const newFacturesBail = await this.facturesBailRepository.create(facturesBail);
    console.log("inside service");
    console.log(newFacturesBail);
    await this.facturesBailRepository.save(newFacturesBail);

    return newFacturesBail;
  }

  // update
  async updateFactureBail(id: number, post: UpdateFactureBailDto) {
    await this.facturesBailRepository.update(id, post);
    const updatedFacturesBail = await this.facturesBailRepository.findOne({where : {id: id}});
    if (updatedFacturesBail) {
      return updatedFacturesBail;
    }

    throw new HttpException('FactureBail not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteFactureBail(id: number) {
    const deletedFacturesBail = await this.facturesBailRepository.delete(id);
    if (!deletedFacturesBail.affected) {
      throw new HttpException('FactureBail not found', HttpStatus.NOT_FOUND);
    }
  }
}