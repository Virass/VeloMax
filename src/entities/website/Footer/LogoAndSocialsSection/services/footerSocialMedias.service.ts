import { simulateCrud } from '@/core/config/api';
import { socialMediaLinks } from '@/shared/constants/mockData/mockData';

export const getSocialMedias = async () =>
  // TODO Add caching here later. Example:

  /*
    const res = await fetch(`${process.env.API_URL}/socials`, {
      cache: 'force-cache',
    });
  */

  simulateCrud(socialMediaLinks, 1500);
