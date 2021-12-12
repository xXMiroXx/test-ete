import SubList from "./SubList";
import Styles from "./Sublists.module.scss";

const ServicesList: React.FC = () => {
  return (
    <SubList name="الخدمات" icon="FaCogs">
      <ul className={Styles.list}>
        <li>service 1</li>
        <li>service 2</li>
        <li>service 3</li>
      </ul>
    </SubList>
  );
};
export default ServicesList;
