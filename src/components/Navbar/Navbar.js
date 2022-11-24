import React, {useState} from 'react'
import { IconLogo, IconLogoMobile, Menu, MenuItemLink, MenuItems, NavbarContainer, NavbarWrapper } from './Navbar.elements'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaTimes} from "react-icons/fa";
import { Carrito, CartWidget } from './CartWidget';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const ChangeClick = () => {
        setClick(!click);
    };

  return (
    <>
    <NavbarContainer>
        <NavbarWrapper>

        <IconLogoMobile onClick={() => ChangeClick()}>

            {
                click ? <FaTimes /> : <FaBars />
            }


        </IconLogoMobile>
        Bullet Proof Records




            <Menu click ={click}>
                <MenuItems onClick={() => ChangeClick()}>
                <MenuItemLink>
                HOME
                </MenuItemLink>
                </MenuItems>
                <MenuItems onClick={() => ChangeClick()}>
                <MenuItemLink>
                ABOUT US
                </MenuItemLink>
                </MenuItems>
                <MenuItems onClick={() => ChangeClick()}>
                <MenuItemLink>
                DIGITAL
                </MenuItemLink>
                </MenuItems>
                <MenuItems onClick={() => ChangeClick()}>
                <MenuItemLink>
                VINYLS
                </MenuItemLink>
                </MenuItems>
                <MenuItems onClick={() => ChangeClick()}>
                <MenuItemLink>
                CONTACT
                </MenuItemLink>
                </MenuItems>
            </Menu>
            <CartWidget>
                <AiOutlineShoppingCart size={"2em"}/>
                <Carrito>
                        3
                </Carrito>
            </CartWidget>

            

        </NavbarWrapper>
    </NavbarContainer>
    
    </>
  )
}

export default Navbar