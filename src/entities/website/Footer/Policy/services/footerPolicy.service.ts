import { simulateCrud } from '@/core/config/api';
import { policies } from '@/shared/constants/mockData';

export const getPolicies = async () =>
    // TODO Add caching here later. Example:

    /*
      const res = await fetch(`${process.env.API_URL}/socials`, {
        cache: 'force-cache',
      });
    */

    simulateCrud(policies, 1500);
