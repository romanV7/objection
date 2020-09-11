import { Column, Table, columnTypes, Model } from 'nestjs-objection';

@Table({ tableName: 'comments' })
export class Comment extends Model {
  @Column({ type: columnTypes.increments })
  id: number;

  @Column({ type: columnTypes.integer })
  userId: number;

  @Column({ type: columnTypes.integer })
  profileId: number

  @Column({ type: columnTypes.string })
  comment: string
}
