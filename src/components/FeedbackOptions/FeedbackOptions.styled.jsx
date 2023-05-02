import styled from '@emotion/styled';

export const Btn = styled.button`
  margin: 5px; 
  width: 80px;
  height: 50px;
  
  &[name="good"]{
    background-color: #46dd46;
  }

  &[name="neutral"]{
    background-color: #0969DA;
  }
  
  &[name="bad"]{
    background-color: #f92626;
  }

  &:hover{
    scale:1.2;
  }

`;
