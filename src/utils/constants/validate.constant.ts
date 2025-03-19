export const EMAIL_VALIDATE = {
  required: {
    value: true,
    message: 'This field is required',
  },
  minLength: {
    value: 8,
    message: 'Minimum number of characters - 8',
  },
  maxLength: {
    value: 64,
    message: 'Maximum number of characters - 64',
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address ',
  },
};

export const PASSWORD_VALIDATE = {
  required: {
    value: true,
    message: 'This field is required',
  },
  minLength: {
    value: 8,
    message: 'Minimum number of characters - 8',
  },
  maxLength: {
    value: 35,
    message: 'Maximum number of characters - 35',
  },
};
