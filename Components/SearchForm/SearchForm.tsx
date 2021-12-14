import Form from "../UI/Form/Form";
import useForm from "../UI/Form/hooks/use-form";
import SearchInput from "../UI/Form/Inputs/SearchInput";
import Styles from "./SearchForm.module.scss";
const SearchForm: React.FC = () => {
  const [state, inputHandler, getInputField] = useForm([
    { id: "search", note: "", status: false, value: "" },
  ]);
  const searchField = getInputField("search");
  return (
    <form className={Styles.form}>
      <h3 className={Styles.form__header}>ابحث عن اسم لشرتك</h3>

      <SearchInput
        handler={inputHandler("search")}
        note={searchField?.note || ""}
        state={searchField?.status || false}
        value={searchField?.value || ""}
      />
    </form>
  );
};
export default SearchForm;
