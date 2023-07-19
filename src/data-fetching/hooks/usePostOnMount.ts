import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function usePostOnMount(
  request: { url: string, postData?: object, headers?: object },
  onSuccess?: () => void,
) {
  const { url, postData = {}, headers = {} } = request;

  const mutation = useMutation({
    mutationFn: (data: object) => axios.post(url, data, { headers }),
    onSuccess,
  });

  useEffect(() => {
    mutation.mutate(postData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mutation;
}
