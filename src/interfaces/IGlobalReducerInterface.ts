export type TTicketInfo = {
  title: string;
  category: string;
  message: string;
};

export default interface IGlobalReducerInterface {
  ticketInfo: TTicketInfo;
  ticketStatus: 'sending' | 'idle';
  isInfoModalOpen: boolean;
}
