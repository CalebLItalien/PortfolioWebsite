import styled from 'styled-components';

export const CompanyImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px; 
  margin-right: 8px;
`;

export const HeadShotImage = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0px 4px 15px 5px rgba(0, 0, 0, 0.6); 
  margin-bottom: 15px;
  margin-left: 15px;
  transition: box-shadow 0.3s ease; 

  &:hover {
    box-shadow: none;
  }
`;
