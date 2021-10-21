import React, { useCallback, useEffect, useState } from 'react';
import { ToastContent } from 'react-toastify/dist/types';
import { ToastOptions, TypeOptions } from 'react-toastify';
import {
  hideToast, showErrorToast, showSuccessToast, showToast, 
} from '../components/common/Toaster';

/**
 * This hook returns its own showToasts and hideToast, so every new showToast call
 * will hide previous toasts from this hook.
 *
 * It also will hide toasts on component unmount.
 *
 * @param hideOnUnmount - hide all toasts on component unmount
 */
export const useToasts = (hideOnUnmount = true) => {
  const [toastId, setToastId] = useState<React.ReactText>();

  const hideToastWrapped = useCallback(() => {
    if (toastId) {
      hideToast(toastId);
    }
  }, [toastId]);

  const showToastWrapped = useCallback(
    (
      content: ToastContent,
      type: TypeOptions = 'info',
      options?: ToastOptions,
    ) => {
      hideToastWrapped();
      setToastId(showToast(content, type, options));
    },
    [setToastId, hideToastWrapped],
  );

  const showSuccessToastWrapped = useCallback(
    (text: string, title?: string, options?: ToastOptions) => {
      hideToastWrapped();
      setToastId(showSuccessToast(text, title, options));
    },
    [setToastId, hideToastWrapped],
  );

  const showErrorToastWrapped = useCallback(
    (text: string, title?: string, options?: ToastOptions) => {
      hideToastWrapped();
      setToastId(showErrorToast(text, title, options));
    },
    [setToastId, hideToastWrapped],
  );

  useEffect(() => {
    if (!hideOnUnmount) {
      return;
    }

    hideToastWrapped();
  }, []);

  return {
    showToast: showToastWrapped,
    hideToast: hideToastWrapped,
    showSuccessToast: showSuccessToastWrapped,
    showErrorToast: showErrorToastWrapped,
  };
};
