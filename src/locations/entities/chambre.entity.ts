import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Chambre {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public numero_chambre: string;

  @Column()
  public type_chambre: string;

  /*@Column()
  public superficie_chambre: string;
  @Column()
  public etage_chambre: string;*/
}

export default Chambre;