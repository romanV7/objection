import { Model, Column, Relation, Table, relationTypes, columnTypes } from 'nestjs-objection';
import { User } from './user.entity';

@Table({ tableName: 'profiles' })
export class Profile extends Model {
  @Column({ type: columnTypes.increments })
  id: number;

  @Column({ type: columnTypes.string })
  nickname?: string

  @Column({ type: columnTypes.string })
  firstName?: string

  @Column({ type: columnTypes.string })
  lastName?: string

  @Relation({
    modelClass: User,
    relation: relationTypes.HasOneRelation,
    join: { from: 'profiles.id', to: 'users.profileId' }
  })
  user: User;

}
