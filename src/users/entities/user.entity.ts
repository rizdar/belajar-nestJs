import { ApiProperty } from '@nestjs/swagger/dist';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
