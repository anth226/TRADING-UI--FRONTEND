import { connectRouter } from 'connected-react-router';
import { history } from '@option-blitz/libs/utils';
import auth from './auth';
import tabs from './tabs';
import navigation from './navigation';
import classic from './classic';
import touch from './touch';
import post from './posts';
import news from './news';

export default {
  router: connectRouter(history),
  auth,
  tabs,
  navigation,
  classic,
  touch,
  post,
  news,
};
