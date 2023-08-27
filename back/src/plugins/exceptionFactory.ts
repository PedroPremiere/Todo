import { BadRequestException, ValidationError } from '@nestjs/common';

import { ParsedBadRequestMessage } from '@/types/errors/ParsedBadRequestMessage';

export function exceptionFactory(errors: ValidationError[]) {
    return new BadRequestException(parseErrorMessages(errors));
}

function parseErrorMessages(
    errors: ValidationError[]
): ParsedBadRequestMessage[] {
    const parsedErrors = [];

    for (const error of errors) {
        const messages = createMessage(error);

        parsedErrors.push({ property: error.property, messages });
    }

    return parsedErrors;
}
function createMessage(error: ValidationError): string[] {
    const messages = [];

    for (const key in error.constraints) {
        messages.push(error.constraints[key]);
    }

    return messages;
}
