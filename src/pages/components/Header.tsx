import { Navbar, NavbarBrand } from '@nextui-org/navbar';
import Scissors from './Scissors';

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Scissors />
        <p className='ml-2 font-bold text-inherit'>BarberShop</p>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
