import {DefaultCrudRepository} from '@loopback/repository';
import {Team, TeamRelations} from '../models';
import {MysqlZplDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TeamRepository extends DefaultCrudRepository<
  Team,
  typeof Team.prototype.id,
  TeamRelations
> {
  constructor(
    @inject('datasources.mysqlZPL') dataSource: MysqlZplDataSource,
  ) {
    super(Team, dataSource);
  }
}
