import React from 'react';
const FormHeader: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <h1 className='text-4xl font-bold tracking-wide'>
        Create an issue ticket
      </h1>
      <p className='opacity-75'>
        Please let us know if something isn't working as expected.
      </p>
    </div>
  );
};
export default FormHeader;
