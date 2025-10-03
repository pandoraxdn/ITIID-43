import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'body-parser';

const capibara = async() => {
    const app = await NestFactory.create(AppModule);
    app.use(json({limit: "100mb"}));
    app.use(urlencoded({limit: "100mb", extended: true}));
    app.setGlobalPrefix("api/dsm43");
    await app.listen(3000);
}
capibara();
