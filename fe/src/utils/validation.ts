type IValidator = (val1: any, val2?: any) => string | undefined;

export const compose = (...validators: IValidator[]) => (value1: any, value2?: any) => {
  for (const validator of validators) {
    const res = validator(value1, value2);
    if (res !== undefined) {
      return res;
    }
  }
  return undefined;
};

const isRequired = (value: any) => value !== '' && value !== undefined && value !== null;

export const required: IValidator = (value: any) =>
  isRequired(value) ? undefined : 'This field is required';

const isEmail = (value: string) => value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const email: IValidator = (value: string) =>
  isEmail(value) ? undefined : 'Email is invalid';
