import styled from 'styled-components';

export const NavbarContainer = styled.div`
width: 100%;
height: 80px;
position: sticky;
top:    0;
z-index: 99;
padding: 1rem;
background-color: black;
`;

export const NavbarWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100&;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
color: white;
font-family: Poppins;
font-size: 1.6rem;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px){
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? 0 : "-100%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: gray;
}
`;

export const MenuItems = styled.li`
height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;
font-size: 1.2rem;
font-family: Poppins;
font-weight: 500;

&:hover {
    background-color: gray;
    border-bottom: 0.3rem solid blue;
   transition 0.2s ease-in; 
}

@media screen and (max-width: 968px){
    width: 50%;
    height: 60px;
}


`;

export const MenuItemLink = styled.a`
text-decoration: none;
color: white;
`;

export const IconLogoMobile = styled.div`
display: none;

@media screen and (max-width: 968px){
    display: flex;
    color: white;
    font-size: 2rem;
}
`;
