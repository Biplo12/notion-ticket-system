import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { TTicketInfo } from '@/interfaces/IGlobalReducerInterface';
import { setTicketInfo, setTicketStatus } from '@/state/globalSlice';

const handleCreateTicket = async (
  dispatch: ReturnType<typeof useAppDispatch>,
  ticketDetails: TTicketInfo
) => {
  try {
    dispatch(setTicketStatus('sending'));
    await axios.post('/api/v1/create-notion-block', ticketDetails);
    toast.success('Ticket Created Successfully');
    dispatch(
      setTicketInfo({
        title: '',
        category: '',
        message: '',
      })
    );
    dispatch(setTicketStatus('idle'));
  } catch (error) {
    toast.error('Something went wrong');
    dispatch(setTicketStatus('idle'));
  }
};

const useCreateTicket = () => {
  const dispatch = useAppDispatch();
  const ticketDetails = useAppSelector((state) => state.global.ticketInfo);
  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ['createTicket'],
    mutationFn: async () => {
      await handleCreateTicket(dispatch, ticketDetails);
    },
  });

  return { handleCreateTicket: mutateAsync, isLoading };
};

export default useCreateTicket;
