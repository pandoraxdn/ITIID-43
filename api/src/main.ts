import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'body-parser';

const capibara = async() => {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [
            "http://localhost:8081",
            "http://10.172.189.74:8081"
        ],
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
        credetials: true
    });
    app.use(json({limit: "100mb"}));
    app.use(urlencoded({limit: "100mb", extended: true}));
    app.setGlobalPrefix("api/dsm43");
    await app.listen(3000);
}
capibara();
