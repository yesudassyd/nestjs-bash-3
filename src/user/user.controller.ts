import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiUserResponse } from 'swagger/user.swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiUserResponse()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiUserResponse()
  findAll() {
    return this.userService.findAll();
  }

  @Get('hai')
  @ApiUserResponse()
  find() {
    return this.userService.find();
  }

  @Get('hey')
  @ApiUserResponse()
  findHey() {
    return this.userService.findHey();
  }

  @Get(':id')
  @ApiUserResponse()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiUserResponse()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiUserResponse()
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
