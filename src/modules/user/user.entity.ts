import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @ApiProperty({
    description: 'This is the user Primary Key',
    example: 1,
  })
  @PrimaryGeneratedColumn({
    comment: 'This is the question unique identifier',
  })
  id: number;

  @ApiProperty({
    description: "This is User's name",
    example: 'John Doe',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: "This is the User's email",
    example: 'john.doe@gmail.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: "This is the hash of the user's password",
    example:
      '$2b$10$tGA6C8vzlCiXwlezfuGAOurwukxBVT3eS12H.Jdody6CwGJJmyVRWjohn.doe@gmail.com',
  })
  @Column()
  password: string;

  @ApiProperty({
    description:
      'This is an auto generated field for the account creating date',
    example: '2023-07-28T12:29:49.935Z',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description:
      'This is an auto generated field for when the account was last updated',
    example: '2023-07-28T12:29:49.935Z',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
