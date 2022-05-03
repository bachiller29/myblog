import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature()
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
