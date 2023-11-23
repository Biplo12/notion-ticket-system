/* eslint-disable @next/next/no-img-element */
import React from 'react';

import TicketForm from '@/components/TicketForm/TicketForm';
const TicketContainer: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-[#050115] p-8 text-white'>
      <TicketForm />
    </div>
  );
};
export default TicketContainer;
