import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { createReadStream, fstat, readFile, readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { PreTestingService } from './pre-testing.service';

@Controller('pre-testing')
export class PreTestingController {
	constructor(
		private readonly pre_testingService: PreTestingService
	){}

	@Get('/users')
	async showAll() {
		return await this.pre_testingService.showAll();
	}

	@Get('/newUser/:name')
	async addNewUser(@Param('name') name: string) {
		await this.pre_testingService.addNewUser(name);
	}

	@Get('/html')
	openHtml() {
		return readFileSync('src/pre-testing/locationSearchTest.html', 'utf8')
	}

	@Get('/connectingTest')
	connectHtmlZ() {
		console.log("hi")
		return "success"
	}

	@Get('/connectingTest/:zoneCode/:address')
	connectHtml(@Param('zoneCode') zoneCode:string, @Param('address') address:string) {
		console.log("hi")
		console.log(`zoneCode: ${zoneCode}  address: ${address}`)
		return "success"
	}
}
