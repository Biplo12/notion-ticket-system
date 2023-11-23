import { InfoIcon } from 'lucide-react';
import React from 'react';

import { useAppDispatch } from '@/store/store-hooks';

import { setInfoModalStatus } from '@/state/globalSlice';
const FormHeader: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleOpenInfoModal = () => {
    dispatch(setInfoModalStatus(true));
  };

  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <div className='flex items-start justify-center gap-3'>
        <h1 className='text-4xl font-bold tracking-wide'>
          Create an issue ticket
        </h1>
        <InfoIcon
          className='h-6 w-6 cursor-pointer text-gray-200'
          onClick={handleOpenInfoModal}
        />
      </div>
      <p className='opacity-75'>
        Please let us know if something isn't working as expected.
      </p>
    </div>
  );
};
export default FormHeader;
