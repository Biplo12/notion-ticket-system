import React from 'react';
const FormButton: React.FC = (): JSX.Element => {
  return (
    <button className='rounded-xl bg-red-600 px-4 py-2 opacity-80 duration-150 ease-linear hover:opacity-100'>
      Create Ticket
    </button>
  );
};
export default FormButton;
