import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledBackToCatalogButton = styled(Button)`
  background-color: white;
  color: black;
  border: 2px solid black;
  margin-right: auto;

  &:hover {
    background-color: white; 
    color: black; 
    border: 2px solid black; 
  }
`;

export const StyledContinueButton = styled(Button)`
  background-color: black;
  color: white;
  border: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 2px solid black;
  }
`;

export const StyledIncrementButton = styled(Button)`
  background-color: white;
  color: black;
  border: 2px solid black;
  margin-right: 0.5rem;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

export const StyledDecrementButton = styled(Button)`
  background-color: white;
  color: black;
  border: 2px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;
