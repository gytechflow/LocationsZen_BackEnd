import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Bailleur {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nom: string;

  @Column()
  public prenom: string;

  @Column("int", { array: true })
  public residence_ids: number[];
}

export default Bailleur;