import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

class User {
  name: string;
  email: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  async createNewUser(@Body() user: User) {
    console.log(user.name, user.email);
    return 'Success';
  }
}
