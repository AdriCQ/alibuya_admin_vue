export interface IUserProfile {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  mobile_phone?: string;
  gender?: 'm' | 'f';
  country?: string;
  address?: string;
}
export interface IUserContact {
  full_name: string;
  ci: string;
  address: string;
}