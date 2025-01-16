import { Link } from "react-scroll";

type MenuItemsProps = {
    onClick?: () => void; 
};

export const MenuItems = ({onClick}: MenuItemsProps) => {

    const menuItems = [
        {
            title: "About",
            href: "about"
        },
        {
            title: "Projects",
            href: "projects"
        },
        {
            title: "Contacts",
            href: "contacts"
        },
    ];

    return (
        <ul>
            {menuItems.map((item, index) => (
                <li key={index}>
                    <Link onClick={onClick ? onClick : undefined} activeClass="active" to={item.href} smooth={true} spy={true}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
};
