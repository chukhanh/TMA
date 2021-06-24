import { message } from "antd";
import { checkObject } from "./object";


export const success = (person) => {
  // message.success(`Welcome to ${person}`)
  // eslint-disable-next-line no-unused-expressions
  (person.length) > 0 ? message.success(`Welcome to ${person}`) : "";
};

export const error = () => {
  message.error("Something is wrong, Please check again ablow!");
};

export const registerScuess = () => {
  message.success("Register successfully!");
};

export const LoginError = (user, account, email) => {
  if (email.length === 0) return;
  else {
    checkObject(user, account)
      ? message.error("Something is wrong, Please check again ablow!")
      : message.error(`The ${email} doesn't exist`);
  }
};

