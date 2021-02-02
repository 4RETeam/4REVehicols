import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('getAll')
    getUsers(){

    }

    @Post('create')
    createUser(){
        
    }

    @Put('update')
    updateUser(){

    }

    @Put('confirm')
    confirmUser(){

    }

    @Put('reject')
    rejectUser(){
        
    }

    @Delete('remove')
    removeUser(){
        
    }
}
