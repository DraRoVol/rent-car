import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  position: absolute;
  top: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f8dfaf;
  border: 0;
  border-radius: 0 50px 50px 0;
  box-shadow: 0 0 12px var(--btn-background-color);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

    & > li:last-child {
    margin-top: 30px;
  }
`;

const Item = styled.li`

`;

const LinkItem = styled(Link)`
  color: var(--btn-background-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--btn-hover-background-color);
  }
`;

export { Nav, List, Item, LinkItem };
