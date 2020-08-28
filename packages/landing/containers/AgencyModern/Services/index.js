import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/src/components/UI/Container';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import FeatureBlock from 'common/src/components/FeatureBlock';

import SectionWrapper, { SectionHeader, ServiceWrapper } from './service.style';
import data from 'common/src/data/AgencyModern';

const Services = () => {
  return (
    <SectionWrapper id="services">
      <Container>
        <Fade up delay={100}>
          <SectionHeader>
            <Heading content="We make it easy to accept payments" />
            <Text content="Give your customers a friction-free checkout experience via any channel." />
          </SectionHeader>
        </Fade>
        <ServiceWrapper>
          {data.services.map((item, index) => (
            <Fade up delay={130 * item.id} key={`service-key-${item.id}`}>
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${item.id}`}
                className="service__item"
                icon={
                  <Image
                    src={item.icon}
                    alt={`Blog Image ${item.id}`}
                    objectFit="cover"
                    className="service__image"
                  />
                }
                iconPosition="left"
                title={<Heading as="h4" content={item.title} />}
                description={<Text content={item.description} />}
              />
            </Fade>
          ))}
        </ServiceWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Services;
