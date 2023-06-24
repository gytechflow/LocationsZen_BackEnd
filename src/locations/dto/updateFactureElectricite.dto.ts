import { Double } from "typeorm";
import Contrat from "../entities/contrat.entity";

export class UpdateFactureElectriciteDto {
    id: number;
    contrat: Contrat;
    index_actuelle: number;
    dernier_index_paye: number;
    date_enregistrement: Date;
    montant_facture: number
}

export default UpdateFactureElectriciteDto;