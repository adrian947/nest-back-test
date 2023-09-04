import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from 'class-validator';

@InputType()
export class createPostInput {
    @IsNotEmpty({ "message": "custom message" }
    )
    @Field()
    title: string;
    @IsNotEmpty()
    @Field()
    content: string;
}