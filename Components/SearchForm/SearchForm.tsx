import useForm from "../../hooks/use-form";
import SearchInput from "../UI/Form/Inputs/SearchInput";
import Styles from "./SearchForm.module.scss";
import { FormEvent } from "react";

const SearchForm: React.FC = () => {
  const [state, inputHandler, getInputField] = useForm([
    { id: "search", note: "", status: false, value: "" },
  ]);
  const searchField = getInputField("search");
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!searchField?.status) return;
  };
  return (
    <form
      onSubmit={submitHandler}
      className={`${Styles.form} ${
        Styles[("form-" + searchField?.status && "valid") || "invalid"]
      }`}
    >
      {/* <h3 className={Styles.form__header}></h3> */}
      <div className={Styles.form__body}>
        <SearchInput
          handler={inputHandler("search")}
          note={searchField?.note || ""}
          state={searchField?.status || false}
          value={searchField?.value || ""}
        />
      </div>

      <button
        disabled={!searchField?.status}
        className={`btn btn-primary ${Styles.form__btn}`}
        type="submit"
      >
        ابحث
      </button>
    </form>
  );
};
export default SearchForm;
