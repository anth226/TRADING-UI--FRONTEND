import { connectRouter } from 'connected-react-router';
import { history } from '@option-blitz/libs/utils';
import auth from './auth';
import tabs from './tabs';
import navigation from './navigation';

export default {
  router: connectRouter(history),
  auth,
  tabs,
  navigation,
};
