import { connectRouter } from 'connected-react-router';
import { history } from '@project/libs/utils';
import auth from './auth';

export default {
  router: connectRouter(history),
  auth,
};
