import { Double } from "typeorm";
import Contrat from "../entities/contrat.entity";

export class CreateFactureBailDto {
    contrat: Contrat;
    dernier_mois_paye: Date;
    date_enregistrement: Date;
    montant_facture: number
  }
  
  export default CreateFactureBailDto;