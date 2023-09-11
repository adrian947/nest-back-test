import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPostInput } from './dto/create-post.input';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) { }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find({relations: ['author']})
  }

  findOnePost(id: number): Promise<Post> {
    return this.postsRepository.findOne({where: {id}, relations: ['author']}, )
  }

  async createPost(post: createPostInput): Promise<Post> {
    const newPost = this.postsRepository.create(post)
    return await this.postsRepository.save(newPost)
  }
}
