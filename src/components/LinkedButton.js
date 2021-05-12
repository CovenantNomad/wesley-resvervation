import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const LinkedButton = styled(RouterLink)`
  display: flex;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.6rem 2rem;
  background: #fff;
  border-radius: 4px;
  border: 2px solid rgb(93, 140, 144);
  justify-content: center;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(93, 140, 144);
    color: #fff;
  }
`;