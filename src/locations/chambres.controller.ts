import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe, } from '@nestjs/common';
import {CreateChambreDto} from './dto/createChambre.dto';
import { ChambresService } from './chambres.service';
import { UpdateChambreDto } from './dto/updateChambre.dto';

@Controller('chambres')
export class ChambresController {
  constructor(private readonly chambresService: ChambresService) {}

  // get all chambres
  @Get()
  getChambres() {
    return this.chambresService.getAllChambres();
  }

  // get chambre by id
  @Get(':id')
  getChambreById(@Param('id') id: string) {
    return this.chambresService.getChambreById(Number(id));
  }

  // create chambre
  @Post()
  async createChambre(@Body() chambre: CreateChambreDto) {
    console.log(chambre)
    return this.chambresService.createChambre(chambre);
  }

  // update chambre
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() chambre: UpdateChambreDto) {
    return this.chambresService.updateChambre(Number(id), chambre);
  }

  //delete chambre
  @Delete(':id')
  async deleteChambre(@Param('id') id: string) {
    this.chambresService.deleteChambre(Number(id));
  }
}