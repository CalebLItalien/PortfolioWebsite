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
  box-shadow: 0px 8px 20px 5px rgba(0, 0, 0, 0.4); 
  margin-bottom: 10vh;
  margin-left: 15px;
  transition: box-shadow 0.3s ease;
  align-self: flex-end;
  margin-right: -4vw;

  &:hover {
    box-shadow: none;
  }
`;

export const PDFImage = styled.img`
  height: 70vh;
  max-width: 100%
  display: block;
  margin: 0 auto;
`