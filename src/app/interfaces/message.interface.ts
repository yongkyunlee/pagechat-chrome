
export interface Message {
    from_uid?: string;
    to_uid?: string;
    name: string;
    message: string;
    date?: number;
    roomId: string;
  }
  