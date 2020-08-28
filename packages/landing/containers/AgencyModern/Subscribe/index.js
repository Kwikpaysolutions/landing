import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/src/components/UI/ContainerTwo';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';

import SectionWrapper, {
  FooterInner,
  Content,
  SubscriptionForm,
} from './subscribe.style';

import bg1 from 'common/src/assets/image/agencyModern/cta/1.png';
import bg2 from 'common/src/assets/image/agencyModern/cta/2.png';
import bg5 from 'common/src/assets/image/agencyModern/cta/5.png';

const Subscribe = () => {
  return (
    <SectionWrapper>
      <Container>
        <FooterInner>
          <Content>
            <Heading as="h3" content="Increase Your Coverage" />
          </Content>
          <SubscriptionForm>
            <div>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
              <Button title="Get Started" type="submit" />
            </div>

          </SubscriptionForm>
        </FooterInner>
      </Container>
      <Image src={bg1} alt="bg1" className="illustration bg1" />
      <Image src={bg2} alt="bg2" className="illustration bg2" />
      <Image src={bg5} alt="bg5" className="illustration bg5" />
    </SectionWrapper>
  );
};

export default Subscribe;
