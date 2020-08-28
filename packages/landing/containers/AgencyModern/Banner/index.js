import React from 'react';
import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Input from 'common/src/components/Input';
import BannerWrapper, {
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

import paypal from 'common/src/assets/image/agencyModern/paypal.png';
import google from 'common/src/assets/image/agencyModern/google.png';
import dropbox from 'common/src/assets/image/agencyModern/dropbox.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Heading
            as="h1"
            content="Connect with more customers &amp; grow your business"
          />

          <Text
            className="banner-caption"
            content="Kwikpay's Open Commerce API supports all major payment processors, credit, gift and debit cards, Echecks, and most popular digital wallets in a single, seamless integration."
          />

          <Subscribe>
            <Input
              inputType="email"
              placeholder="Enter Email Address"
              iconPosition="left"
              aria-label="email"
            />
            <Button title="Get Started" type="submit" />
          </Subscribe>

          <SponsoredBy>
            <Text className="sponsoredBy" content="Integrations:" />
            <ImageGroup>
              <Image src={paypal} alt="Paypal" />
              <Image src={google} alt="Google" />
              <Image src={dropbox} alt="Dropbox" />
            </ImageGroup>
          </SponsoredBy>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
