import { useShallowSelector } from './useShallowSelector';
import { selectAuthTokens } from '../store/auth/selectors';

export const useUser = () => {
  const { access, refresh } = useShallowSelector(selectAuthTokens);
  const isUser = !!access && !!refresh;

  return {
    isUser,
  };
};
