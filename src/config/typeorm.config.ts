import {
  TypeOrmModuleAsyncOptions,
  // TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  useFactory: async () => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      logging: true,
      synchronize: false,
      migrations: [__dirname + '/../migrations/*{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      cli: {
        migrationsDir: __dirname + '/../migrations',
      },
    };
  },
};

export const typeOrmConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
  cli: {
    migrationsDir: __dirname + '/../database/migrations',
  },
};

// export default class TypeOrmConfig {
//   static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
//     return {
//       type: 'postgres',
//       host: configService.get('DB_HOST'),
//       port: configService.get('DB_PORT'),
//       username: configService.get('DB_USERNAME'),
//       password: configService.get('DB_PASSWORD'),
//       database: configService.get('DB_NAME'),
//       entities: [__dirname + '/../**/*.entity.{ts,js}'],
//       synchronize: true,
//       logging: true,
//     };
//   }
// }

// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
//   imports: [ConfigModule],
//   inject: [ConfigService],
//   useFactory: async (
//     configService: ConfigService,
//   ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
// };

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT, 10),
//   username: process.env.DB_USERNAME,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   extra: {
//     charset: 'utf8mb4_unicode_ci',
//   },
//   synchronize: false,
//   logging: true,
// };
