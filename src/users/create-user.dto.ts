import { Length, IsNotEmpty } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty({
    example: 'username',
  })
  @IsNotEmpty()
  username: string;

  @ApiModelProperty({
    minLength: 8,
    maxLength: 20,
    example: 'yourpassword',
  })
  @Length(8, 20)
  @IsNotEmpty()
  password: string;

  @ApiModelPropertyOptional()
  firstName: string;

  @ApiModelPropertyOptional()
  lastName: string;

  @ApiModelPropertyOptional()
  address: string;
}
