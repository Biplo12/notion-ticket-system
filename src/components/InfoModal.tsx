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
    <div className='fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
      <div className='relative flex h-[400px] w-[550px] flex-col items-center justify-center gap-3 rounded-lg bg-white shadow-lg'>
        <X
          className='absolute right-3 top-3 h-6 w-6 cursor-pointer text-black'
          onClick={handleCloseInfoModal}
        />
        InfoModal
      </div>
    </div>
  );
};
export default InfoModal;
