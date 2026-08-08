const React = require("react");

function Router({ children }) {
  return React.createElement(React.Fragment, null, children);
}

function Routes({ children }) {
  const route = React.Children.toArray(children).find((child) => child.props && child.props.path === "/");
  return route ? route.props.element : null;
}

function Route() {
  return null;
}

function NavLink({ children, to, style, className, ...props }) {
  const resolvedStyle = typeof style === "function" ? style({ isActive: false }) : style;
  const resolvedClassName = typeof className === "function" ? className({ isActive: false }) : className;
  return React.createElement("a", { href: to, style: resolvedStyle, className: resolvedClassName, ...props }, children);
}

function Link({ children, to, ...props }) {
  return React.createElement("a", { href: to, ...props }, children);
}

function useParams() {
  return {};
}

function useLocation() {
  return { pathname: "/", search: "", hash: "", key: "test" };
}

module.exports = {
  BrowserRouter: Router,
  Link,
  MemoryRouter: Router,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
};
