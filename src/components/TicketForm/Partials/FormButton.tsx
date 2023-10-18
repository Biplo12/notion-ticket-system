import axios from 'axios';
import React from 'react';

import { useAppSelector } from '@/store/store-hooks';
const FormButton: React.FC = (): JSX.Element => {
  const ticketDetails = useAppSelector((state) => state.global.ticketInfo);
  const handleCreateTicket = async () => {
    try {
      const res = axios.post('/api/v1/create-notion-block', ticketDetails);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button
      onClick={handleCreateTicket}
      className='rounded-xl bg-red-600 px-4 py-2 opacity-80 duration-150 ease-linear hover:opacity-100'
    >
      Create Ticket
    </button>
  );
};
export default FormButton;
