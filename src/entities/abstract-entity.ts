import { Model, Column, columnTypes } from 'nestjs-objection';

export class AbstractEntity extends Model {
  @Column({ type: columnTypes.increments })
  id: number

  @Column({ type: columnTypes.timestamp })
  createdAt: Date

  @Column({ type: columnTypes.timestamp })
  updatedAt: Date

  @Column({ type: columnTypes.timestamp })
  deletedAt: Date

  $beforeInsert() {
    this.createdAt = new Date()
  }

  $beforeUpdate() {
    this.updatedAt = new Date()
  }

  $beforeDelete() {
    this.deletedAt = new Date()
  }
}
