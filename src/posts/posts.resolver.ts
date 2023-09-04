import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { createPostInput } from './dto/create-post.input';

@Resolver()
export class PostsResolver {
    constructor(private postsService: PostsService) { }
    
    @Query(()=> [Post])
    posts() {    
        return this.postsService.findAll();
    }

    @Query(()=> Post)
    post(@Args('id', {type: ()=> Int}) id: number) {            
        return this.postsService.findOnePost(id);
    }

    @Mutation(()=> Post)
    async createPost(@Args('postInput') postInput: createPostInput){           
      return this.postsService.createPost(postInput)
    }
}
