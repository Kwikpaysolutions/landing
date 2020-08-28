import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import TiltShape from '../TiltShape';

import SectionWrapper from './updateScreen.style';
import { SCREENSHOTS } from 'common/src/data/SaasModern';

const UpdateScreen = ({ sectionWrapper, secTitleWrapper, secText, secHeading }) => {
  return (
      <SectionWrapper>
      <TiltShape />
      <Container>
        <Box {...secTitleWrapper} as="section" id="developers_section">
          <Heading {...secHeading} content="Super simple APIs that  you can build on" />
 <Text {...secText} content="See why so many developers love to dabble in our sandbox" />
        </Box>
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar />}
          renderTabContent={() => <TabContent animated={false} />}
          className="update-screen-tab"
        >
          {SCREENSHOTS.map((item, index) => (
            <TabPane
              forceRender={true}
              tab={
                <>
                  <Icon icon={item.icon} size={24} />
                  {item.title}
                </>
              }
              key={index + 1}
            >
              <Image src={item.image} alt={`screenshot-${index + 1}`} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
 secWrapper: {
    mt: ['60px', '80px'],
    mb: ['60px', '80px'],
  },
 secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '18px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#fff',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['48px', '48px'],
    fontWeight: '600',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.87',
  },
};

export default UpdateScreen;
