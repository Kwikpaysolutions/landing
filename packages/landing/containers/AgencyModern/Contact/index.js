import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/ContainerTwo';
import Image from 'common/src/components/Image';
import CardImage from 'common/src/assets/image/agencyModern/pay-card.png';
import PayLogos from 'common/src/assets/image/agencyModern/pay-logo.png';

import ContactFromWrapper from './contact.style';

const ContactSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note,
  imageArea,
  imageOne,
  imageTwo,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="CONTACT US" />
          <Heading
            {...secHeading}
            content="Are you Interested to meet with us?"
          />
        </Box>
       </Box>

        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Fade right>
              <Image {...imageOne} src={CardImage} alt="Card Image" />
            </Fade>
            <Fade bottom>
              <Image {...imageTwo} src={PayLogos} alt="Payment logos" />
            </Fade>
          </Box>
         <Box {...col}>
          <Box {...row}>
          <Box {...contactForm}>
            <ContactFromWrapper>
                <Box {...row}>
              <Input
                inputType="email"
                placeholder="Email address"
                iconPosition="right"
                isMaterial={false}
                className="email_input"
                aria-label="email"
              />
             </Box>
             <Box {...row}>
              <Button {...button} title="SEND MESSAGE" />
             </Box>
            </ContactFromWrapper>
            <Text
              {...note}
              content="Note: Please call us at 12pm to 8am. otherwise our customer supporter will not  available to reach your call, but you can drop mail anytime."
            />
          </Box>
 </Box>
</Box>

</Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['0px', '10px', '20px', '80px'],
    pb: ['0px', '0px', '0px', '0px', '80px'],
    bg: '#f9fbfd',
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
};

export default ContactSection;
