import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateLocataireDto from './dto/createLocataire.dto';
import Locataire from './entities/locataire.entity';
import { UpdateLocataireDto } from './dto/updateLocataire.dto';

@Injectable()
export class LocatairesService {
  constructor(
    @InjectRepository(Locataire) private locataireRepository: Repository<Locataire>,
  ) {}

  // find all
  getAllLocataires() {
    return this.locataireRepository.find();
  }

  // find by id
  async getLocataireById(id: number) {
    const locataire = await this.locataireRepository.findOne({where : {id: id}});
    if (locataire) {
      return locataire;
    }

    throw new HttpException('Locataire not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createLocataire(locataire: CreateLocataireDto) {
    console.log("inside service");
    console.log(locataire);
    const newLocataire = await this.locataireRepository.create(locataire);
    console.log("inside service");
    console.log(newLocataire);
    await this.locataireRepository.save(newLocataire);

    return newLocataire;
  }

  // update
  async updateLocataire(id: number, post: UpdateLocataireDto) {
    await this.locataireRepository.update(id, post);
    const updatedLocataire = await this.locataireRepository.findOne({where : {id: id}});
    if (updatedLocataire) {
      return updatedLocataire;
    }

    throw new HttpException('Locataire not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteLocataire(id: number) {
    const deletedLocataire = await this.locataireRepository.delete(id);
    if (!deletedLocataire.affected) {
      throw new HttpException('Locataire not found', HttpStatus.NOT_FOUND);
    }
  }
}