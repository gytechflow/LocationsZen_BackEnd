import { Double } from "typeorm";
import Chambre from "../entities/chambre.entity";
import FactureBail from "../entities/factureBail.entity";
import FactureElectricite from "../entities/factureELectricite.entity";
import Locataire from "../entities/locataire.entity";

export class CreateContratDto {
    chambre: Chambre;
    locataire: Locataire;
    date_debut: Date;
    date_fin: Date;
    prix_loyer: number;
    index_electricite_initial: number;
  }
  
  export default CreateContratDto;