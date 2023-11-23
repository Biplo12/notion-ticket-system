import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { setTicketInfo } from '@/state/globalSlice';

const useInputChange = (label: 'category' | 'workspace' | 'message') => {
  const dispatch = useAppDispatch();
  const ticketDetails = useAppSelector((state) => state.global.ticketInfo);
  const ticketDetailsValue =
    ticketDetails[label.toLowerCase() as keyof typeof ticketDetails];

  const handleChangeTicketDetails = async (value: string) => {
    dispatch(
      setTicketInfo({
        ...ticketDetails,
        [label.toLowerCase()]: value,
      })
    );
  };
  return { handleChangeTicketDetails, ticketDetailsValue };
};

export default useInputChange;
