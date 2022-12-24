import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--main-text-color);
`;

export const ImageWrapper = styled.div`
  height: 100px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Photo = styled.img`
  width: 100%;
`;

export const PersonalData = styled.div`
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const Label = styled.span`
  color: var(--accent-text-color);
  font-size: 14px;
  margin-right: 5px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  background-color: black;
  color: var(--second-text-color);
  padding: 10px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const Number = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Email = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const LocalData = styled.div`
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const City = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Company = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: #2b2b2b;
  color: var(--second-text-color);
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: var(--accent-bg-color);
  }
`;
