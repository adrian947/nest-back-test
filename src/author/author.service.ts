import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
// import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(Author) private authorRepository: Repository<Author>) { }

  create(createAuthorInput: CreateAuthorInput) {

    const author = this.authorRepository.create(createAuthorInput)

    return this.authorRepository.save(author)
  }

  findAll() {    
    return this.authorRepository.find({ relations: ['posts'] })
  }

  findOne(id: number) {
    return this.authorRepository.findOne({ where: { id },  relations: ['posts'] }  )
  }

  // update(id: number, updateAuthorInput: UpdateAuthorInput) {
  //   return `This action updates a #${id} author`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} author`;
  // }
}
