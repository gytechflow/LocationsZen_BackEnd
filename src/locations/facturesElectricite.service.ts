import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateFactureElectriciteDto from './dto/createFactureElectricite.dto';
import FactureElectricite from './entities/factureELectricite.entity';
import { UpdateFactureElectriciteDto } from './dto/updateFactureElectricite.dto';

@Injectable()
export class FacturesElectriciteService {
  constructor(
    @InjectRepository(FactureElectricite) private factureElectriciteRepository: Repository<FactureElectricite>,
  ) {}

  // find all
  getAllFacturesElectricite() {
    return this.factureElectriciteRepository.find();
  }

  // find by id
  async getFactureElectriciteById(id: number) {
    const factureElectricite = await this.factureElectriciteRepository.findOne({where : {id: id}});
    if (factureElectricite) {
      return factureElectricite;
    }

    throw new HttpException('FactureElectricite not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createFactureElectricite(factureElectricite: CreateFactureElectriciteDto) {
    console.log("inside service");
    console.log(factureElectricite);
    const newFactureElectricite = await this.factureElectriciteRepository.create(factureElectricite);
    console.log("inside service");
    console.log(newFactureElectricite);
    await this.factureElectriciteRepository.save(newFactureElectricite);

    return newFactureElectricite;
  }

  // update
  async updateFactureElectricite(id: number, post: UpdateFactureElectriciteDto) {
    await this.factureElectriciteRepository.update(id, post);
    const updatedFactureElectricite = await this.factureElectriciteRepository.findOne({where : {id: id}});
    if (updatedFactureElectricite) {
      return updatedFactureElectricite;
    }

    throw new HttpException('FactureElectricite not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteFactureElectricite(id: number) {
    const deletedFactureElectricite = await this.factureElectriciteRepository.delete(id);
    if (!deletedFactureElectricite.affected) {
      throw new HttpException('FactureElectricite not found', HttpStatus.NOT_FOUND);
    }
  }
}