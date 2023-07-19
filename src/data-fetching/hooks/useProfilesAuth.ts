import usePostOnMount from '@/data-fetching/hooks/usePostOnMount';

export default function useProfilesAuth(accessToken: string, onSuccess?: () => void) {
  return usePostOnMount({
    url: '/spa/api/profile-auth',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }, onSuccess);
}
