import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateBailleurDto from './dto/createBailleur.dto';
import Bailleur from './entities/bailleur.entity';
import { UpdateBailleurDto } from './dto/updateBailleur.dto';

@Injectable()
export class BailleursService {
  constructor(
    @InjectRepository(Bailleur) private bailleurRepository: Repository<Bailleur>,
  ) {}

  // find all
  getAllBailleurs() {
    return this.bailleurRepository.find();
  }

  // find by id
  async getBailleurById(id: number) {
    const bailleur = await this.bailleurRepository.findOne({where : {id: id}});
    if (bailleur) {
      return bailleur;
    }

    throw new HttpException('Bailleur not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createBailleur(bailleur: CreateBailleurDto) {
    const newBailleur = await this.bailleurRepository.create(bailleur);
    await this.bailleurRepository.save(newBailleur);

    return newBailleur;
  }

  // update
  async updateBailleur(id: number, post: UpdateBailleurDto) {
    await this.bailleurRepository.update(id, post);
    const updatedBailleur = await this.bailleurRepository.findOne({where : {id: id}});
    if (updatedBailleur) {
      return updatedBailleur;
    }

    throw new HttpException('Bailleur not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteBailleur(id: number) {
    const deletedBailleur = await this.bailleurRepository.delete(id);
    if (!deletedBailleur.affected) {
      throw new HttpException('Bailleur not found', HttpStatus.NOT_FOUND);
    }
  }
}