/*import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';


const configuration = {
  type: 'postgres',
  host:  process.env.POSTGRES_HOST,
  port:  parseInt(process.env.POSTGRES_PORT),
  username:  process.env.POSTGRES_USER,
  password:  process.env.POSTGRES_PASSWORD,
  database:  process.env.POSTGRES_DB,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: true, //should be false at production!
};

export default configuration */

import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

/*import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    //console.log(this.config.get<string>('POSTGRES_DB'));
    return {
      type: 'postgres' as 'postgres',
      host: this.config.get<string>('POSTGRES_HOST'),
      port: this.config.get<number>('POSTGRES_PORT'),
      database: this.config.get<string>('POSTGRES_DB'),
      username: this.config.get<string>('POSTGRES_USER'),
      password: this.config.get<string>('POSTGRES_PASSWORD'),
      entities: ['dist/**/ /*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      synchronize: true, // never use TRUE in production!
    };
  }
}*/

export default async (configService: ConfigService) => {
  const options: TypeOrmModuleOptions = {
    type: 'postgres' as 'postgres',
      host: configService.get<string>('POSTGRES_HOST'),
      port: configService.get<number>('POSTGRES_PORT'),
      database: configService.get<string>('POSTGRES_DB'),
      username: configService.get<string>('POSTGRES_USER'),
      password: configService.get<string>('POSTGRES_PASSWORD'),
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      synchronize: true, // never use TRUE in production!
  };
  return options;
};