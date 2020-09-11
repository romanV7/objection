import { Column, Relation, Table, relationTypes, columnTypes, Model } from 'nestjs-objection';
import { Comment } from './comment.entity'

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ type: columnTypes.increments })
  id: number;

  @Column({ type: columnTypes.string })
  email: string;

  @Column({ type: columnTypes.boolean })
  active: boolean

  @Column({ type: columnTypes.boolean })
  ban: boolean

  @Column({ type: columnTypes.number })
  profileId: number

  @Relation({
    modelClass: Comment,
    relation: relationTypes.HasManyRelation,
    join: { from: 'users.id', to: 'comments.userId' }
  })
  comments: Comment[];
}
