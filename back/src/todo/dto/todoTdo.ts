import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class TodoTdo {
    @IsNotEmpty({
        message: 'Should not be empty'
    })
    id: number;

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
