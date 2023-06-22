import { Double } from "typeorm";
import Contrat from "../entities/contrat.entity";

export class UpdateFactureElectriciteDto {
    id: number;
    contrat: Contrat;
    index_actuelle: Double;
    dernier_index_paye: Double;
    date_enregistrement: Date;
    montant_facture: Double
}

export default UpdateFactureElectriciteDto;