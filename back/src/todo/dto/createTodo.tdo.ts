import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateTodoTdo {
    @IsNotEmpty({
        message: 'Should not be empty'
    })
    content: string;

    @IsBoolean()
    @Transform(({ obj }) => {
        return [true, 'true', 1].includes(obj.done);
    })
    done: boolean = false;
}
