import { Entity } from '@loopback/repository';
export declare class Team extends Entity {
    id?: number;
    name: string;
    owner: string;
    captain?: string;
    coach?: string;
    homeGround: string;
    numberOfPlayers?: number;
    numberOfStaff?: number;
    constructor(data?: Partial<Team>);
}
export interface TeamRelations {
}
export declare type TeamWithRelations = Team & TeamRelations;
