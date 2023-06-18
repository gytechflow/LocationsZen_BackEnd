import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Contrat from './contrat.entity';
@Entity()
class Chambre {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public numero_chambre: string;

  @Column()
  public type_chambre: string;

  @OneToOne(() => Contrat, (contrat) => contrat.chambre) // specify inverse side as a second parameter
  contrat: Contrat;

  // TODO: evaluate if these column can be added
  /*@Column()
  public superficie_chambre: string;
  @Column()
  public etage_chambre: string;*/
}

export default Chambre;