import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../../hooks/useUser';

const Authorized: FC<{ redirect: string }> = ({ redirect, children }) => {
  const { isUser } = useUser();

  if (!isUser && redirect) {
    return <Redirect to={redirect} />;
  }

  if (!isUser) {
    return null;
  }

  return <>{children}</>;
};

export { Authorized };
