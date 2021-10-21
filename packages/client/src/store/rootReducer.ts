import { connectRouter } from 'connected-react-router';
import { history } from '@option-blitz/libs/utils';
import auth from './auth';

export default {
  router: connectRouter(history),
  auth,
};
