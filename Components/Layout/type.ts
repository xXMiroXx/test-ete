import { IconType } from "react-icons";

export type NavItemProps = {
  name: string;
  link: string;
  icon: keyof IconType;
};
export type NavListProps = NavItemProps[];

export type ContactProps = {
  id: string;
  name: string;
  address: string;
  workingTime: string;
  phoneNumbers: string[];
  whatsapp: string;
  email: string;
};

export type ContactsProps = ContactProps[];
