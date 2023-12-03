import { X } from 'lucide-react';
import React from 'react';

import { useAppDispatch } from '@/store/store-hooks';

import { setInfoModalStatus } from '@/state/globalSlice';
const InfoModal: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleCloseInfoModal = () => {
    dispatch(setInfoModalStatus(false));
  };
  return (
    <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50  text-white'>
      <div className='relative flex h-[400px] w-[550px] flex-col items-center justify-center gap-3 rounded-lg border border-white bg-gray-900 p-8 shadow-lg'>
        <X
          className='absolute right-3 top-3 h-6 w-6 cursor-pointer'
          onClick={handleCloseInfoModal}
        />
        This application is a demo of a simple CRUD application using React,
        Redux, Typescript, TailwindCSS, Notion API, and OpenAI API. You can
        create a ticket and then the ticket will be sent to the Notion database.
        And it will create a item in TODO list. The ticket will be processed by
        the OpenAI API and then the urgency and priority will be appended to the
        ticket in the Notion database.
      </div>
    </div>
  );
};
export default InfoModal;
