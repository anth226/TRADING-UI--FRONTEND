/**
 * Helps transforming common backend errors to string
 * @param e - original error object
 */
export const transformBackendErrorToString = (e: any) => {
  if (e?.response?.data?.message) {
    return e.response.data.message as string;
  }

  return e.message as string;
};
