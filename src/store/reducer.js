const INITIAL_STATE = {
  isHome: false,
  sender: "",
  subject: "",
  email: "",
  url: "",
  title: "",
  description:
    "A Pingback é o lugar certo pra alcançar sua audiência. Temos o que você precisa para criar, engajar, gerenciar, mensurar e monetizar sua newsletter.",
  keywords: [" "],
  screenWidth: 0,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_IS_HOME":
      return { ...state, isHome: action.payload };
    case "CHANGE_SENDER":
      return { ...state, sender: action.payload };
    case "CHANGE_SUBJECT":
      return { ...state, subject: action.payload };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    case "CHANGE_URL":
      return { ...state, url: action.payload };
    case "CHANGE_TITLE":
      return { ...state, title: action.payload };
    case "CHANGE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "CHANGE_KEYWORDS":
      return { ...state, keywords: action.payload };
    case "CHANGE_SCREEN_WIDTH":
      return { ...state, screenWidth: action.payload };
    default:
      return state;
  }
};
