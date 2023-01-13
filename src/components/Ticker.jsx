import React from 'react';
import { useQuery } from 'react-query';
import { styled } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';
import { keyframes } from '@mui/system';

import fetchNews from '../utils/ApiCalls';

const ticker = keyframes`
  0% {
  '-webkit-transform': translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
  '-webkit-transform': translate3d(- 100 %, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const TickerWrapper = styled(Box)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  overflow: 'hidden',
  height: 40,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  paddingLeft: '100%',
  boxSizing: 'content-box'
});

const TickerContainer = styled(Box)({
  display: 'inline-block',
  height: 40,
  lineHeight: '40px',
  whiteSpace: 'nowrap',
  paddingRight: '100%',
  boxSizing: 'content-box',
  animation: `${ticker} 300s infinite linear`
});

const TickerItem = styled(Box)({
  display: 'inline-block',
  padding: '0 20px',
  fontSize: 20,
  color: 'white'
});

const Ticker = () => {
  const { isLoading, data, error } = useQuery('news', fetchNews);

  return (
    <TickerWrapper>
      <TickerContainer>
        {isLoading ? (
          <LinearProgress color='success' />
        ) : error ? (
          <TickerItem>{error}</TickerItem>
        ) : (
          data?.map((news) => (
            <TickerItem key={news.id}>{news?.desc}</TickerItem>
          ))
        )}
      </TickerContainer>
    </TickerWrapper>
  );
};

export default Ticker;
