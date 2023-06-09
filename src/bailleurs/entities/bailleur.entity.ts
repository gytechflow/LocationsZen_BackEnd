import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Bailleur {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nom: string;

  @Column()
  public prenom: string;

  @Column()
  public residences_ids: number[];
}

export default Bailleur;