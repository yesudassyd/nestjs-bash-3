import { Controller, Get, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Get('success')
  getSuccess() {
    return { message: 'Request successful!' } // 200
  }

  @Get('unauthorized')
  getUnauthorized() {
    throw new UnauthorizedException('You are not authorized!') // 401
  }

  @Get('notfound')
  getNotFound() {
    throw new NotFoundException('Resource not found!') // 404
  }

  @Get('error')
  getError() {
    throw new InternalServerErrorException('Something went wrong!') // 500
  }
}
