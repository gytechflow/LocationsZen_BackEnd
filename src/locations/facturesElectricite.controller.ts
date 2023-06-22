import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe, } from '@nestjs/common';
import {CreateFactureElectriciteDto} from './dto/createFactureElectricite.dto';
import { FacturesElectriciteService } from './facturesElectricite.service';
import { UpdateFactureElectriciteDto } from './dto/updateFactureElectricite.dto';

@Controller('factureElectricite')
export class FacturesElectriciteController {
  constructor(private readonly factureElectriciteService: FacturesElectriciteService) {}

  // get all factureElectricite
  @Get()
  getFactureElectricite() {
    return this.factureElectriciteService.getAllFacturesElectricite();
  }

  // get facturesElectricite by id
  @Get(':id')
  getFacturesElectriciteById(@Param('id') id: string) {
    return this.factureElectriciteService.getFactureElectriciteById(Number(id));
  }

  // create facturesElectricite
  @Post()
  async createFacturesElectricite(@Body() facturesElectricite: CreateFactureElectriciteDto) {
    console.log(facturesElectricite)
    return this.factureElectriciteService.createFactureElectricite(facturesElectricite);
  }

  // update facturesElectricite
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() facturesElectricite: UpdateFactureElectriciteDto) {
    return this.factureElectriciteService.updateFactureElectricite(Number(id), facturesElectricite);
  }

  //delete facturesElectricite
  @Delete(':id')
  async deleteFacturesElectricite(@Param('id') id: string) {
    this.factureElectriciteService.deleteFactureElectricite(Number(id));
  }
}