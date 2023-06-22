import Contrat from "../entities/contrat.entity";

export class CreateChambreDto {
    numero_chambre: string;
    type_chambre: string;
    contrat: Contrat
  }
  
  export default CreateChambreDto;