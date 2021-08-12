import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly userRepo:Repository<User>
	){}
	async signUp(userInfo:User): Promise<void> {
		await this.userRepo.insert(userInfo);
	}

	async checkSameId(id:string) {
		const user = await this.userRepo.findOne({id: id});
		if(user) {
			console.log('false')
			return {'result': 'false'}
		}
		console.log('true')
		return {'result': 'true'}
	}

	async deleteAll(): Promise<void> {
		await this.userRepo.delete({});
	}
}
