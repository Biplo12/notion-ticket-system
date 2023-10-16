import React from 'react';

import FormButton from '@/components/TicketForm/Partials/FormButton';
import FormHeader from '@/components/TicketForm/Partials/FormHeader';
import FormInput from '@/components/TicketForm/Partials/FormInput';

interface TicketInput {
  label: string;
  placeholder: string;
  inputType: 'text' | 'number' | 'message';
}

const ticketInputs: TicketInput[] = [
  {
    label: 'Category',
    placeholder: 'Post failure',
    inputType: 'text',
  },
  {
    label: 'Workspace',
    placeholder: 'TinyKiwi',
    inputType: 'text',
  },
  {
    label: 'Message for the support team',
    placeholder: 'This post fails on Facebook.',
    inputType: 'message',
  },
];

const TicketForm: React.FC = (): JSX.Element => {
  return (
    <div className='absolute left-1/2 top-1/2 flex h-[675px] w-[675px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-gray-600 bg-opacity-0 shadow-lg'>
      <FormHeader />
      {ticketInputs.map((input, index) => (
        <FormInput
          label={input.label}
          placeholder={input.placeholder}
          inputType={input.inputType}
          key={index}
        />
      ))}
      <div className='flex w-full items-start justify-start'>
        <FormButton />
      </div>
    </div>
  );
};

export default TicketForm;
