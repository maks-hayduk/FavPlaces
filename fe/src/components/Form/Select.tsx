import * as React from 'react';
import { FieldProps } from 'formik';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

import { IOptionType } from 'types';

const animatedComponents = makeAnimated();

interface ISelectField {
  options: IOptionType[];
  className?: string;
}

export const SelectField: React.FC<ISelectField & FieldProps> = ({ options, field, form, className }) => (
    <CreatableSelect
      className={className}
      defaultValue={field.value}
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
