import React from "react";
import {useField} from "formik";
import {StyledSelect, StyledErrorMessage, StyledLabel} from './form.style.jsx';

export const formInput = ({ label, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta] = useField(props);
    return (
        <>
          <label htmlFor={props.id || props.name}>{label}</label>
          <input className="text-input" {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </>
      );
}

export const formCheckBox = ({ children, ...props }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <>
        <label className="checkbox">
          <input {...field} {...props} type="checkbox" />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

export const formSelect = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta] = useField(props);
    return (
      <>
        <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
        <StyledSelect {...field} {...props} />
        {meta.touched && meta.error ? (
          <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
      </>
    );
  };

