import styled from 'styled-components';

export const Title = styled.div`
  margin: auto;
  padding: 2%;
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1.6;
  padding-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.fontColor || '#000'};
`;
export const Description = styled.div`
  margin: auto;
  padding: 2%;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 200;
  line-height: 1.6;
  color: ${(props) => props.color || 'gray'};
`;

export const VideoThumbnail = styled.img`
  height: 15vh;
`;

export const CustomCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: ${(props) => props.height || '30vh'};
  margin: 5%;
  word-wrap: break-word;
  background-color: ${(props) => props.elementBackground || '#fff'};
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
