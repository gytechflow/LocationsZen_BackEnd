import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateContratDto from './dto/createContrat.dto';
import Contrat from './entities/contrat.entity';
import { UpdateContratDto } from './dto/updateContrat.dto';
import createContratEtLocataireDto from './dto/createContratEtLocataireDto';
import Locataire from './entities/locataire.entity';
import Chambre from './entities/chambre.entity';

@Injectable()
export class ContratsService {
  constructor(
    @InjectRepository(Contrat) private contratRepository: Repository<Contrat>,
    @InjectRepository(Locataire) private locataireRepository: Repository<Locataire>,
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
    console.log(contrat);
    const newContrat = await this.contratRepository.create(contrat);
    await this.contratRepository.save(newContrat);

    return newContrat;
  }

  async createContratEtLocataire(contratEtLocataire: createContratEtLocataireDto) {
    console.log(contratEtLocataire);
    const locataire = new Locataire();
    locataire.nom = contratEtLocataire.nom;
    locataire.prenom = contratEtLocataire.prenom;
    locataire.numero_telephone = contratEtLocataire.telephone;
    const newLocataire = await this.locataireRepository.create(locataire);
    await this.locataireRepository.save(newLocataire);

    const contrat = new Contrat();
    contrat.chambre = contratEtLocataire.chambre as Chambre;
    contrat.date_debut = contratEtLocataire.date_debut;
    contrat.date_fin = contratEtLocataire.date_fin;
    contrat.index_electricite_initial = contratEtLocataire.index_electricite_initial;
    contrat.montant_loyer = contratEtLocataire.montant_loyer;
    contrat.locataire = newLocataire;
    console.log("inside service");
    console.log(contrat.chambre.id);
    console.log(contrat);

    const newContrat = await this.contratRepository.create(contrat);
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