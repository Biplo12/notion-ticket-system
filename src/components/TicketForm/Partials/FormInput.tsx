import React from 'react';

import useInputChange from '@/hooks/useInputChange';

interface FormInputProps {
  label: string;
  inputType: 'text' | 'number' | 'message';
  placeholder: string;
  isRequired?: boolean;
  maxChars?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  inputType,
  placeholder,
  isRequired = true,
  maxChars = 250,
}): JSX.Element => {
  const { handleChangeTicketDetails, ticketDetailsValue } =
    useInputChange(label);

  return (
    <div className='flex w-full flex-col items-start justify-start gap-3'>
      <label className='flex gap-1 opacity-80'>
        {label}
        {isRequired ? <span className='text-red-500'>*</span> : null}
      </label>
      {inputType === 'message' ? (
        <textarea
          placeholder={placeholder}
          required={isRequired}
          maxLength={maxChars}
          className='max-h-80 min-h-[100px] w-full rounded-lg border-0 bg-gray-900 p-3'
          value={ticketDetailsValue}
          onChange={(e) => handleChangeTicketDetails(e.target.value)}
        />
      ) : (
        <input
          placeholder={placeholder}
          required={isRequired}
          maxLength={maxChars}
          type={inputType}
          className='w-full rounded-lg border-0 bg-gray-900 p-3'
          value={ticketDetailsValue}
          onChange={(e) => handleChangeTicketDetails(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormInput;
