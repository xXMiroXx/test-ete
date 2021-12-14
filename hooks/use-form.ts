import { Reducer, useReducer } from "react";
import { FormState, FormAction } from "../Components/UI/Form/type";

const reducer: Reducer<FormState, FormAction> = (state, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case "input":
      const fieldIndex = state.inputFields.findIndex(
        (e) => e.id === action.payload.id
      );
      if (fieldIndex === -1) return state;
      stateCopy.inputFields[fieldIndex].value = action.payload.input;
      stateCopy.inputFields[fieldIndex].status = action.payload.state;
      stateCopy.inputFields[fieldIndex].note = action.payload.note;
      break;
    default:
      return state;
  }
  const formState = !stateCopy.inputFields.some((e) => !e.status);
  stateCopy.formState = formState;
  return stateCopy;
};

const bd: FormState = {} as FormState;
const useForm = (fields: typeof bd.inputFields) => {
  const [state, dispatch] = useReducer(reducer, {
    formState: false,
    inputFields: fields,
  });
  const inputHandler = (id: string) => {
    return (input: string, state: boolean, note: string) => {
      dispatch({ type: "input", payload: { id, input, state, note } });
    };
  };

  const getInputField = (id: string) => {
    return state.inputFields.find((e) => e.id === id);
  };

  return [state, inputHandler, getInputField] as const;
  // Readonly<[FormState, typeof dispatch]>;
};
export default useForm;
