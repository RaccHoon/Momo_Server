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
	
	@Get('/info/user/:userId')
	async getInfoByUserId(@Param('userId') id:string) {
		return await this.groupService.getInfoByUserId(id);
	}

	@Get('/info/:id')
	async getInfo(@Param('id') id:string) {
		return await this.groupService.getInfo(id);
	}

	@Get('/member/:groupId/:userId')
	async putNewMember(@Param('groupId') groupId, @Param('userId') userId:string) {
		await this.groupService.putNewMember(groupId, userId)
	}
}
