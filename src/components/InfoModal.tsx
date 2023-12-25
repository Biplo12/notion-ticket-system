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
    <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50  p-3 text-white'>
      <div className='relative flex h-auto min-h-[300px] w-[550px] flex-col items-center justify-center gap-3 rounded-lg border border-white bg-gray-900 p-6 pt-12 shadow-lg'>
        <X
          className='absolute right-3 top-3 h-6 w-6 cursor-pointer transition-all duration-150 ease-linear hover:text-gray-400'
          onClick={handleCloseInfoModal}
        />
        <p>
          This application is a demo of a simple CRUD application using React,
          Redux, Typescript, TailwindCSS, Notion API. You can create a ticket by
          providing a title, category, and description. Then the ticket will be
          sent to the Notion database. And it will create a item in TODO list.
        </p>
      </div>
    </div>
  );
};
export default InfoModal;
