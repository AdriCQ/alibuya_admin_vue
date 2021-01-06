import { ApiResponse } from "@/types";

export class AxiosHelper {
  static callableService(_service: ApiResponse<unknown>, _callback: CallableFunction) {
    return new Promise((resolve, reject) => {
      _service.then(_response => {
        const _resp = _response.data;
        if (_resp.STATUS)
          resolve(_callback(_resp));
        else {
          const errors: string[] = [];
          for (const _key in _resp.ERRORS as unknown[]) {
            errors.push(_resp.ERRORS[_key]);
          }
          reject(errors);
        }
      }).catch(error => {
        if (Array.isArray(error))
          reject(error);
        else
          reject([error])
      })
    })
  }
}
