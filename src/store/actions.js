export const changeIsHome = (isHome) => {
  return {
    type: "CHANGE_IS_HOME",
    payload: isHome,
  };
};

export const changeSender = (sender) => {
  return {
    type: "CHANGE_SENDER",
    payload: sender,
  };
};

export const changeSubject = (subject) => {
  return {
    type: "CHANGE_SUBJECT",
    payload: subject,
  };
};

export const changeEmail = (email) => {
  return {
    type: "CHANGE_EMAIL",
    payload: email,
  };
};

export const changeUrl = (url) => {
  return {
    type: "CHANGE_URL",
    payload: url,
  };
};

export const changeTitle = (title) => {
  return {
    type: "CHANGE_TITLE",
    payload: title,
  };
};

export const changeDescription = (description) => {
  return {
    type: "CHANGE_DESCRIPTION",
    payload: description,
  };
};

export const changeKeywords = (keywords) => {
  return {
    type: "CHANGE_KEYWORDS",
    payload: keywords,
  };
};

export const changeScreenWidth = (screenWidth) => {
  return {
    type: "CHANGE_SCREEN_WIDTH",
    payload: screenWidth,
  };
};
