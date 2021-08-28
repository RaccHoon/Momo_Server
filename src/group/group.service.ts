import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
	constructor(
		@InjectRepository(Group)
		private readonly groupRepo:Repository<Group>
	){}

	async storeGroupInfo(groupInfo) {
		await this.groupRepo.insert(groupInfo);
	}

	async deleteAll() {
		await this.groupRepo.delete({});
	}

	async getInfo(id:string) {
		return await this.groupRepo.find({id: id})
	}

	async getInfoByUserId(id:string) {
		const groupInfos = await this.groupRepo.find({
			order: {
				createdDate: 'DESC'
				}
		})
		const requestedGroups = []
		
		for(let group of groupInfos) {
			if(group.memberIds.includes(id))
				requestedGroups.push({
					name: group.name,
					type: group.type,
					id: group.id
				})
		}
		return requestedGroups
	}

	async putNewMember(groupId:string, userId:string) {
		let members = (await this.groupRepo.findOne({id: groupId})).memberIds
		members.push(userId)
		await this.groupRepo.update({ id: groupId }, { memberIds: members });
	}
}
