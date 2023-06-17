import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Contrat from './contrat.entity';

@Entity()
class Locataire {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nom: string;

  @Column()
  public prenom: string;

  @Column()
  public numero_telephone: string;

  @OneToOne(() => Contrat, (contrat) => contrat.locataire) // specify inverse side as a second parameter
  contrat: Contrat;
}

export default Locataire;