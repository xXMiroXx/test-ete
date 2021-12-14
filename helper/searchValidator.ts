const searchValidator: (input: string) => { status: boolean; note: string } = (
  input: string
) => {
  input = input.trim();
  if (!input) return { status: false, note: "ادخل اسم الشركه" };
  if (input.match(/[^a-zA-Z\s&.,]/))
    return { status: false, note: "اسم الشركه يجب ان يكون بالانجليزيه" };
  return { status: true, note: "" };
};
export default searchValidator;
