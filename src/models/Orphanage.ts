import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column()
    name: string;
    @Column()
    latitude: number;
    @Column()
    longitutde: number;
    @Column()
    about: string;
    @Column()
    ionstructions: string;
    @Column()
    opening_hours: string;
    @Column()
    opening_on_weekend: true;
}