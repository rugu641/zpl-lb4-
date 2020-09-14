import {Entity, model, property} from '@loopback/repository';

@model()
export class Player extends Entity {
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
    type: 'number',
    required: true,
  })
  age: number;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
  })
  battingStyle?: string;

  @property({
    type: 'string',
  })
  bowlingStyle?: string;

  @property({
    type: 'number',
    default: 0,
  })
  matchesPlayed?: number;

  @property({
    type: 'number',
  })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  team_id?: number;


  constructor(data?: Partial<Player>) {
    super(data);
  }
}

export interface PlayerRelations {
  // describe navigational properties here
}

export type PlayerWithRelations = Player & PlayerRelations;
