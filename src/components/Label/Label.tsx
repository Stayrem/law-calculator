import React from 'react';
import css from './Label.scss';

interface ILabel {
  children?: React.ReactNode;
  label: string;
  isRow?: boolean;
  className?: string;
  style?: Object;
}

const Label = (props: ILabel) => {
  const {
    label, children, style = {}, isRow = false, className = '',
  } = props;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label style={style} className={[css.label, className].concat(isRow ? [] : css.column).join(' ')}>
      <span className={css.labelText}>{label}</span>
      {children}
    </label>
  );
};

export default Label;
