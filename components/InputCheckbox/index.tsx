'use client';

import clsx from 'clsx';
import { useId } from 'react';

type InputCheckboxProps = {
  labeltext?: string;
  labelPosition?: 'top' | 'left' | 'right';
} & React.ComponentProps<'input'>;

export function InputCheckbox({
  className,
  labelPosition = 'right',
  ...props
}: InputCheckboxProps) {
  const inputId = useId();

  const inputClasses = clsx('outline-none rounded-lg', 'w-5 h-5', className);

  return (
    <div className="flex items-center gap-4">
      {labelPosition !== 'right' && props.labeltext && (
        <label htmlFor={inputId}>{props.labeltext}</label>
      )}

      <input {...props} className={inputClasses} id={inputId} type="checkbox" />

      {labelPosition === 'right' && props.labeltext && (
        <label htmlFor={inputId}>{props.labeltext}</label>
      )}
    </div>
  );
}
