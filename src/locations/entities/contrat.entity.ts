import { Column, Double, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Chambre from './chambre.entity'
import Locataire from './locataire.entity'
import FactureElectricite from './factureELectricite.entity';
import FactureBail from './factureBail.entity';

@Entity()
class Contrat {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToOne(() => Chambre)
  @JoinColumn()
  public chambre: Chambre;

  @OneToOne(() => Locataire)
  @JoinColumn()
  public locataire: Locataire;

  @OneToMany(() => FactureElectricite, (facture_electricite) => facture_electricite.contrat)
  public factures_electricite: FactureElectricite[];

  @OneToMany(() => FactureBail, (facture_bail) => facture_bail.contrat)
  public factures_bail: FactureBail[];
  
  @Column()
  public date_debut: Date;

  @Column()
  public date_fin: Date;

   @Column()
   public prix_loyer: Double;

   @Column()
   public index_electricite_initial: number;
}

export default Contrat;