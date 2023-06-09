import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import CreateBailleurDto from './dto/createBailleur.dto';
import { BailleursService } from './bailleurs.service';
import { UpdateBailleurDto } from './dto/updateBailleur.dto';

@Controller('bailleurs')
export class BailleursController {
  constructor(private readonly bailleursService: BailleursService) {}

  // get all bailleurs
  @Get()
  getBailleurs() {
    return this.bailleursService.getAllBailleurs();
  }

  // get bailleur by id
  @Get(':id')
  getBailleurById(@Param('id') id: string) {
    return this.bailleursService.getBailleurById(Number(id));
  }

  // create bailleur
  @Post()
  async createBailleur(@Body() bailleur: CreateBailleurDto) {
    return this.bailleursService.createBailleur(bailleur);
  }

  // update bailleur
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() bailleur: UpdateBailleurDto) {
    return this.bailleursService.updateBailleur(Number(id), bailleur);
  }

  //delete bailleur
  @Delete(':id')
  async deleteBailleur(@Param('id') id: string) {
    this.bailleursService.deleteBailleur(Number(id));
  }
}