import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: String;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: String;

    @Column()
    instructions: String;

    @Column()
    opening_hours: String;

    @Column()
    open_on_weekend: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}