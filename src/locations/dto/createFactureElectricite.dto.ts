import Contrat from "../entities/contrat.entity";

export class CreateFactureElectriciteDto {
  contrat: Contrat;
  index_actuelle: number;
  dernier_index_paye: number;
  date_enregistrement: Date;
  montant_facture: number
  }
  
  export default CreateFactureElectriciteDto;