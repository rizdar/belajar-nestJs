import { ApiProperty } from '@nestjs/swagger/dist';

export class Todo {
  @ApiProperty()
  id: number;
  name: string;
  description?: string;
}
