import React from "react";

interface CustomPhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  maxDigitLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
}

export const createCustomPhoneInput = (maxDigitLength: number) => {
  const Component = React.forwardRef<HTMLInputElement, CustomPhoneInputProps>(
    (props, ref) => {
      return (
        <CustomPhoneInput
          {...props}
          maxDigitLength={maxDigitLength}
          ref={ref}
        />
      );
    }
  );

  Component.displayName = `CustomPhoneInputWithMaxLength_${maxDigitLength}`;
  return Component;
};

const CustomPhoneInput = React.forwardRef<
  HTMLInputElement,
  CustomPhoneInputProps
>(({ value, onChange, onFocus, onBlur, maxDigitLength = 10, ...rest }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/\D/g, "");

    if (digitsOnly.length <= maxDigitLength) {
      onChange?.(rawValue);
    }
  };

  return (
    <input
      {...rest}
      ref={ref}
      value={value}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
});

CustomPhoneInput.displayName = "CustomPhoneInput";
