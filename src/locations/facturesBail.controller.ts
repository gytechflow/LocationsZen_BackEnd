import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {CreateFactureBailDto} from './dto/createFactureBail.dto';
import { FacturesBailService } from './facturesBail.service';
import { UpdateFactureBailDto } from './dto/updateFactureBail.dto';

@Controller('facturesBail')
export class FacturesBailController {
  constructor(private readonly facturesBailService: FacturesBailService) {}

  // get all facturesBail
  @Get()
  getFacturesBail() {
    return this.facturesBailService.getAllFacturesBail();
  }

  // get factureBail by id
  @Get(':id')
  getFactureBailById(@Param('id') id: string) {
    return this.facturesBailService.getFactureBailById(Number(id));
  }

  // create factureBail
  @Post()
  async createFactureBail(@Body() factureBail: CreateFactureBailDto) {
    console.log(factureBail)
    factureBail.dernier_mois_paye = new Date(factureBail.dernier_mois_paye);
    factureBail.date_enregistrement = new Date(factureBail.date_enregistrement);
    return this.facturesBailService.createFactureBail(factureBail);
  }

  // update factureBail
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() factureBail: UpdateFactureBailDto) {
    return this.facturesBailService.updateFactureBail(Number(id), factureBail);
  }

  //delete factureBail
  @Delete(':id')
  async deleteFactureBail(@Param('id') id: string) {
    this.facturesBailService.deleteFactureBail(Number(id));
  }
}