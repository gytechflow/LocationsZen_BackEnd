import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Contrat from './contrat.entity'

@Entity()
class FactureElectricite {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Contrat, (contrat) => contrat.factures_electricite)
  public contrat: Contrat;

  @Column()
  public index_actuelle: string;

  @Column()
  public last_index: string;

  @Column()
  public date_enregistrement: Date;

  @Column()
  public montant_facture: Double;
}
export default FactureElectricite;