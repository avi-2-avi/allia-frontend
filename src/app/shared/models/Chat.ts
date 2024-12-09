

  
  export type Chat = {

    id: string;
  
    title: string;
  
    messages: { text: string; sender: 'user' | 'bot'; name: string }[];
  
    date: string;
  
  }
  