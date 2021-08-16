import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./products/common/filter/exception.filter";
import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";

@Module({
    imports: [ProductsModule],
    controllers: [AppController],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
        AppService,
    ],
})
export class AppModule {}
