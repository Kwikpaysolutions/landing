import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';

import CardImage from 'common/src/assets/image/agencyModern/pay-card.png';
import PayLogos from 'common/src/assets/image/agencyModern/pay-logo.png';

const PaymentSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageOne,
  imageTwo,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...col} {...textArea}>
            <Fade bottom cascade>
              <Heading
                {...title}
                content="We support mostly all payment methods"
              />
              <Text
                {...description}
                content="Connect to more than 200 alternative payment methods and payments providers to reach e-commerce markets in more than 160 countries."
              />
              <Box>
                <Link href="#">
                  <a>
                    <Button {...button} title="LEARN MORE" />
                  </a>
                </Link>
              </Box>
            </Fade>
          </Box>
          <Box {...col} {...imageArea}>
            <Fade right>
              <Image {...imageOne} src={CardImage} alt="Card Image" />
            </Fade>
            <Fade bottom>
              <Image {...imageTwo} src={PayLogos} alt="Payment logos" />
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

PaymentSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageOne: PropTypes.object,
  imageTwo: PropTypes.object,
};

PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['40px', '40px', '40px', '80px'],
    mt: '40px',
    mb: '40px',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
    ml: '0',
    mr: '0',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '48%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '52%'],
  },
  title: {
    fontSize: ['26px', '38px', '38px', '48px', '48px'],
    fontWeight: '600',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  description: {
    fontSize: '20px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '40px',
  },
  button: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  imageOne: {
    mb: '40px',
    pb: '40px',
    ml: 'auto',
    mr: 'auto',
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto',
  },
};

export default PaymentSection;
