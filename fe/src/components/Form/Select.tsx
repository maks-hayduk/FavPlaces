import * as React from 'react';
import { FieldProps } from 'formik';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

import { IOptionType } from 'types';

const animatedComponents = makeAnimated();

interface ISelectField {
  options: IOptionType[];
  placeholder: string;
  className?: string;
  onInputChange?: (val: string) => void;
  onChange?: (val: any) => void;
  isMulti?: boolean;
}

export const CreatableSelectField: React.FC<ISelectField & FieldProps> = ({ options, field, form, className, placeholder }) => (
  <CreatableSelect
    className={className}
    defaultValue={field.value}
    placeholder={placeholder}
    closeMenuOnSelect={false}
    components={animatedComponents}
    isMulti={true}
    isClearable={true}
    options={options}
    onChange={(option) => {
      form.setFieldValue(field.name, option);
    }}
    onFocus={() => {
      form.setTouched({ [field.name]: true });
    }}
  />
);

export const SelectField: React.FC<ISelectField & FieldProps> = ({ options, className, onInputChange, placeholder, onChange, ...props }) => (
  <Select
    className={className}
    isClearable={false}
    isSearchable={true}
    name="color"
    options={options}
    placeholder={placeholder}
    onInputChange={(value: string) => {
      if (onInputChange) {
        onInputChange(value);
      }
    }}
    onChange={(value) => {
      if (onChange) {
        onChange(value);
      }
    }}
    {...props}
  />
);
