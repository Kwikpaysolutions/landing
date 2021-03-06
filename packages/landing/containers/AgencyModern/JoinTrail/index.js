import React from 'react';
import Fade from 'react-reveal/Fade';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import JoinTrailArea, { ContentWrapper, ButtonGroup } from './joinTrail.style';

import { joinSlack } from 'common/src/data/AppClassic';

const JoinTrail = () => {
  const { logo, title, description } = joinSlack;

  return (
    <JoinTrailArea id="trail">
      <ContentWrapper>
        <Fade up>
          <Image src={logo} alt="Gmail" />
        </Fade>
        <Fade up delay={100}>
          <Heading content={title} />
        </Fade>
        <Fade up delay={200}>
          <Text content={description} />
        </Fade>
        <Fade up delay={300}>
          <ButtonGroup>
            <Button title="Get Started" />
            <Button title="Sign up with Email" variant="textButton" />
          </ButtonGroup>
        </Fade>
      </ContentWrapper>
    </JoinTrailArea>
  );
};

export default JoinTrail;
