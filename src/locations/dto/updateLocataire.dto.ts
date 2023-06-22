import Contrat from "../entities/contrat.entity";

export class UpdateLocataireDto {
    id: number;
    nom: string;
    prenom: string;
    numero_telephone: string;
    contrat: Contrat
}

export default UpdateLocataireDto;