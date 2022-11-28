export interface Account {
  name: string;
  email: string;
  password: string;
  balance: number;
  salt: string;
  hash: string;
}
