import { useState } from 'react';
import { classnames } from '../../utils/classnames';
import type { InputTextProps } from './types';
import EyeOpen from '../../../assets/eyeOpen';
import EyeClose from '../../../assets/eyeClose';

import './_index.scss';

export const DEFAULT_TYPE = 'text';

const InputText = ({
  type = DEFAULT_TYPE,
  textLabel,
  value,
  style,
  className,
  autoFocus,
  placeholder,
  containerStyle,
  mainContainerClassname,
  containerClassName,
  customInput = {},
  disabled,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  error,
  pattern,
  maxLength,
}: InputTextProps) => {
  const [isShowPassword, setShowPassword] = useState(false);

  const numberInputOnWheelPreventChange = (
    e: React.WheelEvent<HTMLInputElement>
  ) => {
    if (e.currentTarget.type === 'number') {
      e.currentTarget.blur();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={classnames([mainContainerClassname, 'mainContainerClassname'])}
    >
      {typeof textLabel === 'string' && textLabel.length > 0 && (
        <span
          className={classnames(['span-title-input', error ? 'Error' : ''])}
        >
          {textLabel}
        </span>
      )}

      <div
        style={containerStyle}
        className={classnames([
          containerClassName,
          'input-control-container',
          disabled ? 'Disabled' : '',
          error ? 'error-inputText' : '',
          type === 'password' ? 'password' : '',
        ])}
      >
        <input
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          {...customInput}
          type={type === 'password' && isShowPassword ? 'text' : type}
          style={style}
          readOnly={readOnly}
          disabled={disabled}
          autoFocus={autoFocus}
          placeholder={placeholder}
          pattern={pattern}
          maxLength={maxLength}
          onClick={(e) => e.stopPropagation()}
          autoComplete="new-password"
          onWheel={numberInputOnWheelPreventChange}
          className={classnames([
            className,
            'input-control',
            type === 'password' ? 'input-is-password' : '',
            error ? 'input-has-error' : '',
          ])}
        />

        {type === 'password' && (
          <button
            type="button"
            className="btn-icon-input"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {isShowPassword ? <EyeClose /> : <EyeOpen />}
          </button>
        )}
      </div>

      {error && <span className="span-error-input-message">* {error}</span>}
    </div>
  );
};

export { InputText };
