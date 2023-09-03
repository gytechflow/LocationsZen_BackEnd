import Chambre from "../entities/chambre.entity";

export class createContratEtLocataireDto {
    nom: string;
    prenom: string;
    telephone: string;
    chambre: Chambre;
    date_debut: Date;
    date_fin: Date;
    montant_loyer: number;
    index_electricite_initial: number;
  }
  
export default createContratEtLocataireDto;