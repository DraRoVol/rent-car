import { Nav, List, Item, LinkItem } from './Sidebar.styled';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

const Sidebar = () => {
  return (
    <Nav>
      <List>
        <Item>
          <LinkItem to="/catalog"><DirectionsCarFilledIcon /></LinkItem>
        </Item>
        <Item>
          <LinkItem to="/favorites"><NoCrashIcon /></LinkItem>
        </Item>
      </List>
    </Nav>
  );
};

export default Sidebar;