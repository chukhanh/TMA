import { Route } from "react-router-dom";
import React from "react";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const UserTemplate = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(propsComponent) => <renderMergedProps {...propsComponent} />}
    />
  );
};

export default UserTemplate;
