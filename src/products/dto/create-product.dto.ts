import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { IsNameUserUnique } from "../is-name-user-unique.validator";

export class CreateProductDto {
    id?: number;

    @IsNotEmpty({
        message: "Código é obrigatório!",
    })
    @IsString()
    code: string;

    @IsNotEmpty({
        message: "Nome é obrigatório!",
    })
    @IsString()
    @IsNameUserUnique({
        message: "NameUser precisa ser único.",
    })
    name: string;

    @Exclude({
		toPlainOnly: true
	})
	@IsNotEmpty()
    price: number;
}
