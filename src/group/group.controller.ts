import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
	constructor(
		private readonly groupService:GroupService
	){}

	@Post('/creation')
	async storeGroupInfo(@Body() info) {
		await this.groupService.storeGroupInfo(info)
	}

	@Delete('/delete')
	async deleteAll() {
		await this.groupService.deleteAll();
	}

	@Get('/info/:id')
	async getInfo(@Param('id') id:string) {
		return await this.groupService.getInfo(id);
	}

	@Get('/info/user/:userId')
	async getInfoByUserId(@Param('id') id:string) {
		return await this.groupService.getInfoByUserId(id);
	}
}
