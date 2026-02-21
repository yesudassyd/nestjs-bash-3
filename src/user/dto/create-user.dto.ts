import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({example: 'JD', description: 'The name of the User'})
    name: string
    @ApiProperty({example: 'jd@gmail.com', description: 'The email of the User'})
    email: string
}
