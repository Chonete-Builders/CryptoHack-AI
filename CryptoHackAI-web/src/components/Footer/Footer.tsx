import { PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from './Footer.data';
import { classes } from './Footer.styles';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SocialMediaLinks />
      <div className={classes.linksContainer}>
        <a href={PRIVACY_POLICY_URL} className={classes.links}>
          Privacy
        </a>
        <a href={TERMS_OF_SERVICE_URL} className={classes.links}>
          Terms
        </a>
      </div>
    </footer>
  );
};
