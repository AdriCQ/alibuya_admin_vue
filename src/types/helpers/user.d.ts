/**
 * Ilogin params
 */
export interface ILoginParams {
  email: string;
  password: string;
}
/**
 * Iauth response
 */
export interface IAuthResponse {
  profile: IUserProfile;
  api_token: string;
}