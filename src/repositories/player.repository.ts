import {DefaultCrudRepository} from '@loopback/repository';
import {Player, PlayerRelations} from '../models';
import {MysqlZplDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlayerRepository extends DefaultCrudRepository<
  Player,
  typeof Player.prototype.id,
  PlayerRelations
> {
  constructor(
    @inject('datasources.mysqlZPL') dataSource: MysqlZplDataSource,
  ) {
    super(Player, dataSource);
  }
}
