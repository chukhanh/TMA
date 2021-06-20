import { message } from "antd";
// import { debounce } from "./debounce";

export const success = (person) => {
  // message.success(`Welcome to ${person}`)
    // eslint-disable-next-line no-unused-expressions
    (person.length > 0) ? message.success(`Welcome to ${person}`) : '';
};

export const error = () => {
    message.error("Something is wrong, Please check again ablow!");
  };

export const registerScuess = () => {
  message.success("Register successfully!");
}  