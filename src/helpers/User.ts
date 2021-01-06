import { IUserProfile, ILoginParams, ApiResponse, IAuthResponse } from '@/types';
import Axios from 'axios';
/**
 * User helper
 */
export class UserHelper {
  /**
   * Profile  of user helper
   */
  static _profile: IUserProfile = {
    id: 0,
    email: '',
    first_name: '',
    last_name: ''
  }
  /**
   * Base url of user helper
   */
  static baseUrl = '/user';

  /**
   * Instances user helper
   * @param _full boolean
   * @returns IUserProfile  
   */
  static instance(_full = false) {
    if (_full) {
      this._profile.address = '';
      this._profile.country = '';
      this._profile.gender = 'm';
      this._profile.mobile_phone = '';
    }
    return this._profile;
  }

  /**
   * Auth Login Service
   * @param _params ILoginParams
   */
  static login(_params: ILoginParams): ApiResponse<IAuthResponse> {
    return Axios.post(this.baseUrl + '/login', _params);
  }

}