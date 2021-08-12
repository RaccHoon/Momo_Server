import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { DeleteDateColumn } from 'typeorm';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(
		private readonly userService: UsersService
	){};

	@Post('/signup')
	async signUp(@Body() userInfo:User): Promise<void> {
		userInfo.group = [];
		await this.userService.signUp(userInfo);
	}

	@Get('/overlap/:id')
	async checkSameId(@Param('id') id) {
		return await this.userService.checkSameId(id);
	}

	@Delete('deleteAll')
	async deleteAll(): Promise<void> {
		await this.userService.deleteAll();
	}
}
