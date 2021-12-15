import useForm from "../../hooks/use-form";
import SearchInput from "../UI/Form/Inputs/SearchInput";
import Styles from "./SearchForm.module.scss";
import { FormEvent, useState } from "react";

const SearchForm: React.FC = () => {
  const [_state, inputHandler, getInputField] = useForm([
    { id: "search", note: "", status: false, value: "" },
  ]);
  const searchField = getInputField("search");

  // True if company is available!
  const [state, setState] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(false);
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchField?.status) return;
    setResolved(false);
    setLoading(true);
    try {
      const response = await fetch(
        "/api/search/companies-house?name=" + searchField.value
      );
      const data = await response.json();
      setState(data.available);
    } catch (e) {
      setState(false);
    }
    setLoading(false);
    setResolved(true);
  };
  return (
    <form
      onChange={() => setResolved(false)}
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
        className={`btn btn-secondary ${Styles.form__btn}`}
        type="submit"
      >
        ابحث
      </button>
      <button className={`btn btn-primary`} type="button">
        سجل شركتك
      </button>
      <div className={Styles.form__resolve}>
        {isLoading && <div className="loader"></div>}
        {resolved && (
          <div
            className={
              (state && Styles["form__resolve--valid"]) ||
              Styles["form__resolve--invalid"]
            }
          >
            {state ? "متاح" : "مسجل بالفعل"}
          </div>
        )}
      </div>
    </form>
  );
};
export default SearchForm;
