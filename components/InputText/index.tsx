import clsx from 'clsx';
import { useId } from 'react';

type InputTextProps = {
  labeltext?: string;
  labelposition?: 'top' | 'left';
  maxLength: number;
} & React.ComponentProps<'input'>;

export function InputText({
  labelposition: labelPosition = 'top',
  className,
  ...props
}: InputTextProps) {
  const inputId = useId();

  const containerProps = {
    top: clsx('flex flex-col gap-2'),
    left: clsx('flex gap-4'),
  };
  const containerClasses = containerProps[labelPosition];
  const labelClasses = props.disabled ? clsx('text-slate-500') : clsx();
  const inputClasses = clsx(
    'outline-0',
    'border-b border-slate-500',
    'p-2',
    'focus:border-slate-100',
  );

  return (
    <div className={containerClasses}>
      {props.labeltext && (
        <label className={labelClasses} htmlFor={inputId}>
          {props.labeltext}
        </label>
      )}
      <input id={inputId} className={inputClasses} {...props} />
    </div>
  );
}
