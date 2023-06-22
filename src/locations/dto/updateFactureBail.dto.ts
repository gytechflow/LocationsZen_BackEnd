import { Double } from "typeorm";
import Contrat from "../entities/contrat.entity";

export class UpdateFactureBailDto {
    id: number;
    contrat: Contrat;
    dernier_mois_paye: Date;
    date_enregistrement: Date;
    montant_facture: Double
}

export default UpdateFactureBailDto;