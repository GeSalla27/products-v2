import { Injectable } from "@nestjs/common";
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from "class-validator";
import { ProductsService } from "./products.service";

@Injectable()
@ValidatorConstraint()
export class IsNameUserUniqueConstraint
    implements ValidatorConstraintInterface
{
    constructor(private productsService: ProductsService) {}

    validate(
        name: string,
        validationArguments?: ValidationArguments
    ): boolean | Promise<boolean> {
		return !!this.productsService.findName(name);
    }
}

export function IsNameUserUnique(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNameUserUniqueConstraint,
        });
    };
}
