import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe, } from '@nestjs/common';
import {CreateContratDto} from './dto/createContrat.dto';
import { ContratsService } from './contrats.service';
import { UpdateContratDto } from './dto/updateContrat.dto';
import createContratEtLocataireDto from './dto/createContratEtLocataireDto';

@Controller('contrats')
export class ContratsController {
  constructor(private readonly contratsService: ContratsService) {}

  // get all contrats
  @Get()
  getContrats() {
    return this.contratsService.getAllContrats();
  }

  // get contrat by id
  @Get(':id')
  getContratById(@Param('id') id: string) {
    return this.contratsService.getContratById(Number(id));
  }

  // create contrat
  @Post()
  async createContrat(@Body() contrat: CreateContratDto) {
    console.log(contrat)
    contrat.date_debut = new Date(contrat.date_debut);
    contrat.date_fin = new Date(contrat.date_fin);
    return this.contratsService.createContrat(contrat);
  }

  // create contrat
  @Post('contratEtLocataire')
  async createContratEtLocataire(@Body() contrat: createContratEtLocataireDto) {
    console.log(contrat)
    // contrat.date_debut = new Date(contrat.date_debut);
    // contrat.date_fin = new Date(contrat.date_fin);
    return this.contratsService.createContratEtLocataire(contrat);
  }

  // update contrat
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() contrat: UpdateContratDto) {
    return this.contratsService.updateContrat(Number(id), contrat);
  }

  //delete contrat
  @Delete(':id')
  async deleteContrat(@Param('id') id: string) {
    this.contratsService.deleteContrat(Number(id));
  }
}