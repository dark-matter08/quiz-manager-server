import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config();

const typeOrmConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  namingStrategy: new SnakeNamingStrategy(),
});

export default typeOrmConfig;
