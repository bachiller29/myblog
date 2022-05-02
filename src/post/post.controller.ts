import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('post')
export class PostController {

    @Get()
    getMany() {
     return 'OK';
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        console.log(id)
        return {
            message: 'getOne'
        }
    }

@Post()
createone(){

}

@Put(':id')
editOne(@Param('id') id: string){

}

@Delete(':id')
delete(@Param('id') id: string){

}

}
