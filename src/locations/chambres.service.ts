import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateChambreDto from './dto/createChambre.dto';
import Chambre from './entities/chambre.entity';
import { UpdateChambreDto } from './dto/updateChambre.dto';

@Injectable()
export class ChambresService {
  constructor(
    @InjectRepository(Chambre) private chambreRepository: Repository<Chambre>,
  ) {}

  // find all
  getAllChambres() {
    return this.chambreRepository.find();
  }

  // find by id
  async getChambreById(id: number) {
    const chambre = await this.chambreRepository.findOne({where : {id: id}});
    if (chambre) {
      return chambre;
    }

    throw new HttpException('Chambre not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createChambre(chambre: CreateChambreDto) {
    console.log("inside service");
    console.log(chambre);
    const newChambre = await this.chambreRepository.create(chambre);
    console.log("inside service");
    console.log(newChambre);
    await this.chambreRepository.save(newChambre);

    return newChambre;
  }

  // update
  async updateChambre(id: number, post: UpdateChambreDto) {
    await this.chambreRepository.update(id, post);
    const updatedChambre = await this.chambreRepository.findOne({where : {id: id}});
    if (updatedChambre) {
      return updatedChambre;
    }

    throw new HttpException('Chambre not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteChambre(id: number) {
    const deletedChambre = await this.chambreRepository.delete(id);
    if (!deletedChambre.affected) {
      throw new HttpException('Chambre not found', HttpStatus.NOT_FOUND);
    }
  }
}