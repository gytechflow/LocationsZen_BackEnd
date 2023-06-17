import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Contrat from './contrat.entity'

@Entity()
class FactureBail {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => Contrat, (contrat) => contrat.factures_bail)
  public contrat: Contrat;

  @Column()
  public last_month_pay: string;

  @Column()
  public last_index: string;

  @Column()
  public date_enregistrement: Date;

  @Column()
  public montant_facture: Double;
}
export default FactureBail;