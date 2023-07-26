import { HttpStatus, ValidationPipe } from '@nestjs/common';

const PASSWORD_RULE =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>/?])(.{8,})$/;

const PASSWORD_RULE_MESSAGE =
  'Password should have at least 1 uppercase and a lowercase letter, with a number and a special character';

const VALIDATION_PIPE = new ValidationPipe({
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
});

export const REGEX = { PASSWORD_RULE };
export const MESSAGES = { PASSWORD_RULE_MESSAGE };
export const SETTINGS = { VALIDATION_PIPE };
