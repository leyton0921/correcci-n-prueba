export interface Post {
    id: number;
    title: string;
    description: string;
    user_id: number;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    language: string;
  }
  
  export interface Session {
    user: User;
    expires: string;
  }
  