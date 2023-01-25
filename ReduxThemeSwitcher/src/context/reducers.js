export default function (state, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    default:
      return state;
  }
}
