import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  @MaxLength(20)
  name: string;
  description?: string;
}
