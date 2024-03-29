import Chambre from "../entities/chambre.entity";
import Locataire from "../entities/locataire.entity";

export class CreateContratDto {
    chambre: Chambre;
    locataire: Locataire;
    date_debut: Date;
    date_fin: Date;
    montant_loyer: number;
    index_electricite_initial: number;
  }
  
  export default CreateContratDto;