export type TTicketInfo = {
  category: string;
  workspace: string;
  message: string;
};

export default interface IGlobalReducerInterface {
  ticketInfo: TTicketInfo;
  ticketStatus: 'sending' | 'idle';
  isInfoModalOpen: boolean;
}
