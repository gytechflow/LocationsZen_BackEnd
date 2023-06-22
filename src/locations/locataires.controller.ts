import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe, } from '@nestjs/common';
import {CreateLocataireDto} from './dto/createLocataire.dto';
import { LocatairesService } from './locataires.service';
import { UpdateLocataireDto } from './dto/updateLocataire.dto';

@Controller('locataires')
export class LocatairesController {
  constructor(private readonly locatairesService: LocatairesService) {}

  // get all locataires
  @Get()
  getLocataires() {
    return this.locatairesService.getAllLocataires();
  }

  // get locataire by id
  @Get(':id')
  getLocataireById(@Param('id') id: string) {
    return this.locatairesService.getLocataireById(Number(id));
  }

  // create locataire
  @Post()
  async createLocataire(@Body() locataire: CreateLocataireDto) {
    console.log(locataire)
    return this.locatairesService.createLocataire(locataire);
  }

  // update locataire
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() locataire: UpdateLocataireDto) {
    return this.locatairesService.updateLocataire(Number(id), locataire);
  }

  //delete locataire
  @Delete(':id')
  async deleteLocataire(@Param('id') id: string) {
    this.locatairesService.deleteLocataire(Number(id));
  }
}