import { IconType } from "react-icons";

export type NavItemProps = {
  name: string;
  link: string;
  icon: keyof IconType;
};
export type NavListProps = NavItemProps[];
