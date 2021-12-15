import useForm from "../../hooks/use-form";
import SearchInput from "../UI/Form/Inputs/SearchInput";
import Styles from "./SearchForm.module.scss";
import { FormEvent, useState } from "react";
import Popup from "../UI/Popup/Popup";
import Register from "./Register";

const SearchForm: React.FC = () => {
  const [_state, inputHandler, getInputField] = useForm([
    { id: "search", note: "", status: false, value: "" },
  ]);
  const searchField = getInputField("search");

  // True if company is available!
  const [state, setState] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [isPopup, setPopup] = useState(false);
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
      <div className={Styles.form__body}>
        <SearchInput
          handler={inputHandler("search")}
          note={searchField?.note || ""}
          state={searchField?.status || false}
          value={searchField?.value || ""}
          isLoading={isLoading}
        />
      </div>

      <div
        className={`${Styles.form__resolve}
                    ${resolved && Styles["form__resolve--active" || ""]}
                    ${(state && Styles["form__resolve--valid"]) || ""}`}
      >
        {state ? "متاح" : "غير متاح"}
      </div>

      <button
        disabled={!searchField?.status}
        className={`btn  ${Styles["form__search-btn"]} 
                         ${
                           (!searchField?.status &&
                             Styles["form__search-btn--invalid"]) ||
                           ""
                         }`}
        type="submit"
      >
        ابحث
      </button>

      <button
        onClick={() => setPopup(true)}
        type="button"
        className={`${Styles["form__register-btn"]} btn btn-primary`}
      >
        سجل شركتك
      </button>
      {isPopup && (
        <Popup
          heading="سجل شركتك"
          closeHandler={() => {
            setPopup(false);
          }}
        >
          <Register />
        </Popup>
      )}
    </form>
  );
};
export default SearchForm;
