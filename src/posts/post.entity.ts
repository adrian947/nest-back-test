import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
@ObjectType()
export class Post {

  @PrimaryGeneratedColumn()  
  @Field(() => Int)
  id: number;
  @Column()  
  @Field()
  title: string;
  @Column({type: 'text'})  
  @Field()
  content: string;
}
