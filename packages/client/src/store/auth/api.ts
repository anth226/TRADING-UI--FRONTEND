import { AxiosResponse } from 'axios';
import { api } from '../../utils/api';
import { ApiPaths } from '../../utils/api/constants';
import { AuthRefreshResponse } from './types';

let refresher: Promise<AxiosResponse<AuthRefreshResponse>> | undefined;

export const authRefresh = async (refresh: string) => {
  if (refresher) {
    // don't run twice
    return refresher;
  }
  
  refresher = api.post<AuthRefreshResponse>(
    ApiPaths.AuthRefresh,
    {},
    {
      headers: { authorization: `Bearer ${refresh}` },
    },
  );

  const result = await refresher;
  refresher = undefined;
  return result;
};
