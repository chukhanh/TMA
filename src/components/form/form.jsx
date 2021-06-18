import React from "react";
import {useField} from "formik";
import {StyledSelect, StyledErrorMessage, StyledLabel} from './form.style.jsx';
import style from './form.module.scss';

export const FormInput = ({ label, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta] = useField(props);
    return (
        <div className={style.formInput}>
          <label htmlFor={props.id || props.name}>{label}</label>
          <input className={style.textInput} {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className={style.error}>{meta.error}</div>
          ) : null}
        </div>
      );
}

export const FormCheckBox = ({ children, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <div className={style.formCheckBox}>
        <label className={style.checkBox}>
          <input {...field} {...props} type="checkbox" />
          <span>{children}</span>
        </label>
        {meta.touched && meta.error ? (
          <div className={style.error}>{meta.error}</div>
        ) : null}
      </div>
    );
  };

export const FormSelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta] = useField(props);
    return (
      <div className={style.formSelect}>
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
        <StyledSelect {...field} {...props}/>
        {meta.touched && meta.error ? (
          <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
      </div>
    );
  };

