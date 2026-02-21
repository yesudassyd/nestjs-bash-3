import { applyDecorators } from "@nestjs/common";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { stat } from "fs";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export function ApiUserResponse(){
    return applyDecorators(
        ApiOkResponse({
            description: 'User getting successfully',
            type: CreateUserDto
        }),
        ApiCreatedResponse({
            description: 'User created successfully',
            type: CreateUserDto
        }),
        ApiBadRequestResponse({
            description: 'Invalid input',
            schema: {
                example: {
                    statusCode: 400,
                    message: 'Validation failed',
                    error: 'Bad Request'
                }
            }
        }),
        ApiUnauthorizedResponse({
            description: 'Unauthorized',
            schema:{
                example:{
                    statusCode: 401,
                    message: 'unauthorized'
                }
            }
        }),
        ApiNotFoundResponse({
            description: 'User not found',
            schema: {
                example: {
                    statusCode: 404,
                    message: 'User not found',
                    error: 'Not Found'
                }
            }
        }),
        ApiInternalServerErrorResponse({
            description: 'Internal server error',
            schema: {
                example:{
                    statusCode: 500,
                    message: 'Something went wrong'
                }
            }
        })
    )
}