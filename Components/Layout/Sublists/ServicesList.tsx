import { IconType } from "react-icons";
import SubList from "./SubList";
import Styles from "./Sublists.module.scss";

const ServicesList: React.FC = () => {
  const icon = "FaBookmark" as never;
  return (
    <SubList name="الخدمات" icon={icon as never}>
      <ul className={Styles.list}>
        <li>service 1</li>
        <li>service 2</li>
        <li>service 3</li>
      </ul>
    </SubList>
  );
};
export default ServicesList;
