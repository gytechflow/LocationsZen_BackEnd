import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Contrat from './contrat.entity'

@Entity()
class FactureBail {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Contrat, (contrat) => contrat.factures_bail)
  public contrat: Contrat;

  @Column()
  public dernier_mois_paye: Date;

  @Column()
  public date_enregistrement: Date;

  @Column()
  public montant_facture: Double;
}
export default FactureBail;