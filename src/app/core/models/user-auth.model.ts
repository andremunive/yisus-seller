export interface UserAuthModel {
  jwt: string;
  user: User;
}

export interface User {
  blocked: boolean;
  confirmed: boolean;
  createdAt: Date;
  email: string;
  id: number;
  provider: string;
  updatedAt: Date;
  username: string;
}
