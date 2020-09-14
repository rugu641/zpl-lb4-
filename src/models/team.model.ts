import {Entity, model, property} from '@loopback/repository';

@model()
export class Team extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  owner: string;

  @property({
    type: 'string',
  })
  captain?: string;

  @property({
    type: 'string',
  })
  coach?: string;

  @property({
    type: 'string',
    required: true,
  })
  homeGround: string;

  @property({
    type: 'number',
    default: 0,
  })
  numberOfPlayers?: number;

  @property({
    type: 'number',
    default: 0,
  })
  numberOfStaff?: number;


  constructor(data?: Partial<Team>) {
    super(data);
  }
}

export interface TeamRelations {
  // describe navigational properties here
}

export type TeamWithRelations = Team & TeamRelations;
