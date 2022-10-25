import User from "./user-login-icon.svg";
import UserPerfil from "./user-setting-icon.svg";
import Order from "./orders.svg";
import Categories from "./categories-icon.svg";
import ContactUs from "./contactus-icon.svg";
import Home from "./home.svg";
import Search from "./search.svg";

export function UserLoginIcon() {
    return <User />;
}

export function PerfilIcon() {
    return <UserPerfil fill="white" />;
}

export function PerfilBlackIcon() {
    return <UserPerfil fill="black" />;
}

export function CategoriesIcon() {
    return <Categories />;
}

export function ContactUsIcon() {
    return <ContactUs />;
}

export function HomeIcon() {
    return <Home />;
}

export function SearchIcon() {
    return <Search />;
}

export function OrdersIcon() {
    return <Order fill="white" />;
}

export function OrdersBlackIcon() {
    return <Order fill="black" />;
}
