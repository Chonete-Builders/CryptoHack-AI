'use client';

import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandDiscordFilled,
} from '@tabler/icons-react';
import { classes } from './SocialMediaLinks.styles';
import { SOCIAL_MEDIA_URLS } from './SocialMediaLinks.data';

const socialMediaIcons = [
  {
    icon: IconBrandInstagram,
    url: SOCIAL_MEDIA_URLS.Instagram,
    label: 'Instagram',
  },
  {
    icon: IconBrandLinkedin,
    url: SOCIAL_MEDIA_URLS.LinkedIn,
    label: 'LinkedIn',
  },
  {
    icon: IconBrandDiscordFilled,
    url: SOCIAL_MEDIA_URLS.Discord,
    label: 'Discord',
  },
];

export const SocialMediaLinks = () => {
  return (
    <div className={classes.container}>
      {socialMediaIcons.map(({ icon: Icon, url, label }) => (
        <Icon
          key={label}
          className={classes.icon}
          size={24}
          onClick={() => window.open(url, '_blank')}
          aria-label={`Open ${label}`}
          role="button"
        />
      ))}
    </div>
  );
};
