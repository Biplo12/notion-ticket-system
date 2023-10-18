import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setTicketInfo } from '@/state/globalSlice';

const useInputChange = (label: string) => {
  const dispatch = useAppDispatch();
  const ticketDetails = useAppSelector((state) => state.global.ticketInfo) as {
    [key: string]: string;
  };
  const ticketDetailsValue = ticketDetails[label.toLowerCase()];

  const handleChangeTicketDetails = async (value: string) => {
    dispatch(
      setTicketInfo({
        ...ticketDetails,
        [label?.toLowerCase()]: value,
      })
    );
  };
  return { handleChangeTicketDetails, ticketDetailsValue };
};

export default useInputChange;
