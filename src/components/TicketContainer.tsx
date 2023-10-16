/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Background from '@/components/Background';
import TicketForm from '@/components/TicketForm/TicketForm';
const TicketContainer: React.FC = (): JSX.Element => {
  return (
    <div className='h-screen w-full bg-[#050115] text-white'>
      <Background />
      <TicketForm />
    </div>
  );
};
export default TicketContainer;
