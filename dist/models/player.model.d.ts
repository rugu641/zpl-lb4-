import { Entity } from '@loopback/repository';
export declare class Player extends Entity {
    id?: number;
    name: string;
    age: number;
    role: string;
    country: string;
    battingStyle?: string;
    bowlingStyle?: string;
    matchesPlayed?: number;
    team_id?: number;
    constructor(data?: Partial<Player>);
}
export interface PlayerRelations {
}
export declare type PlayerWithRelations = Player & PlayerRelations;
