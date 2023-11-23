import React from 'react';

import useCreateTicket from '@/hooks/useCreateTicket';

import Spinner from '@/components/common/Spinner';

import { useAppSelector } from '@/store/store-hooks';

const FormButton: React.FC = (): JSX.Element => {
  const { handleCreateTicket, isLoading } = useCreateTicket();
  const ticketDetails = useAppSelector((state) => state.global.ticketInfo);

  const isDisabled =
    Object.values(ticketDetails).some((value) => !value) || isLoading;

  return (
    <button
      onClick={() => handleCreateTicket()}
      className='min-w-[150px] rounded-xl bg-red-600 px-4 py-2 opacity-80 duration-150 ease-linear hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50'
      disabled={isDisabled}
    >
      {isLoading ? <Spinner /> : 'Create Ticket'}
    </button>
  );
};
export default FormButton;
