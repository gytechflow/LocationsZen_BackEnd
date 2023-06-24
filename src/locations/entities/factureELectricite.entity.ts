import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Contrat from './contrat.entity'

@Entity()
class FactureElectricite {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Contrat, (contrat) => contrat.factures_electricite)
  public contrat: Contrat;

  @Column("float")
  public index_actuelle: number;

  @Column("float")
  public dernier_index_paye: number;

  @Column()
  public date_enregistrement: Date;

  @Column("float")
  public montant_facture: number;
}
export default FactureElectricite;