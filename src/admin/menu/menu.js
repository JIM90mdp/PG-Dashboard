import * as React from "react";
import { DashboardMenuItem, MenuItemLink } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import CategoryIcon from '@mui/icons-material/Category';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const Menu = () => (
  <div>
    <DashboardMenuItem />
    <MenuItemLink to="/artists" primaryText="Artists" leftIcon={<GroupsIcon />} />
    <MenuItemLink to="/locations" primaryText="Locations" leftIcon={<LocationOnIcon />} />
    <MenuItemLink to="/categories" primaryText="Categories" leftIcon={<CategoryIcon />} />
    <MenuItemLink to="/products" primaryText="Products" leftIcon={<SlideshowIcon />} />
    <MenuItemLink
      to="/users"
      primaryText="User"
      leftIcon={<PeopleIcon />}
    />
    <MenuItemLink to="/customers" primaryText="Customers" leftIcon={<WifiCalling3Icon />} />
    <MenuItemLink to="/orders" primaryText="Orders" leftIcon={<BookmarkBorderIcon />} />
    <MenuItemLink
      to="/reviews"
      primaryText="Reviews"
      leftIcon={<BookIcon />}
    />
  </div>
);
