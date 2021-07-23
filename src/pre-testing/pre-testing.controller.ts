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
	async openHtml() {
		//return '<h1>hello</h1>'
		console.log(readFileSync('src/pre-testing/test.html', 'utf8'))
		return readFileSync('src/pre-testing/test.html', 'utf8')
		//const file = fileURLToPath('file://localhost/C:/Users/choco/contest/momo_Server/momo/src/pre-testing/test.html')
	}
}
