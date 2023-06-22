import { Double } from "typeorm";
import Chambre from "../entities/chambre.entity";
import FactureBail from "../entities/factureBail.entity";
import FactureElectricite from "../entities/factureELectricite.entity";
import Locataire from "../entities/locataire.entity";

export class UpdateChambreDto {
    id: number;
    chambre: Chambre;
    locataire: Locataire;
    factures_electricite: FactureElectricite;
    factures_bail: FactureBail;
    date_debut: Date;
    date_fin: Date;
    prix_loyer: Double;
    index_electricite_initial: number;
}

export default UpdateChambreDto;