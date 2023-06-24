import { Double } from "typeorm";
import Chambre from "../entities/chambre.entity";
import FactureBail from "../entities/factureBail.entity";
import FactureElectricite from "../entities/factureELectricite.entity";
import Locataire from "../entities/locataire.entity";

export class UpdateChambreDto {
    id: number;
    numero_chambre: string;
    type_chambre: string;
}

export default UpdateChambreDto;