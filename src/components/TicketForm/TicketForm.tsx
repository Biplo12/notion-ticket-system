import React from 'react';

import FormButton from '@/components/TicketForm/Partials/FormButton';
import FormHeader from '@/components/TicketForm/Partials/FormHeader';
import FormInput from '@/components/TicketForm/Partials/FormInput';

interface TicketInput {
  label: 'Title' | 'Category' | 'Message';
  placeholder: string;
  inputType: 'text' | 'number' | 'message';
}

const ticketInputs: TicketInput[] = [
  {
    label: 'Title',
    placeholder: 'Facebook post fails',
    inputType: 'text',
  },
  {
    label: 'Category',
    placeholder: 'Social Media',
    inputType: 'text',
  },
  {
    label: 'Message',
    placeholder: 'This post fails on Facebook.',
    inputType: 'message',
  },
];

const TicketForm: React.FC = (): JSX.Element => {
  return (
    <div className='flex w-[675px] flex-col items-center justify-center gap-3 rounded-lg bg-gray-600 bg-opacity-0 shadow-lg'>
      <FormHeader />
      {ticketInputs.map((input, index) => (
        <FormInput
          label={input.label.toLowerCase() as 'title' | 'category' | 'message'}
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
