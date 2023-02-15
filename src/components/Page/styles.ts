import { BannerSvg } from './../../assets/banner/index';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Banner = styled(BannerSvg)`
  height: 296px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -56px;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 864px;
  width: 100%;

  margin-top: 40px;
`;
