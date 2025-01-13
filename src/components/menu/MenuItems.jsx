export const MenuItems = () => {
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
                    <a href={`#${item.href}`}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
};
