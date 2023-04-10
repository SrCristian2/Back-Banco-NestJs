"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const adapters_1 = require("@nestjs/platform-fastify/adapters");
const lib_1 = require("fastify-multer/lib");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new adapters_1.FastifyAdapter({ logger: true }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const logger = new common_1.Logger('bootstrap');
    app.register(lib_1.contentParser);
    await app.listen(process.env.PORT, process.env.HOST);
    logger.log(`servidor corriendo por el puerto ${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map