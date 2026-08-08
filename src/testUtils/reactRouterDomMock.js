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

function NavLink({ children, to, style, ...props }) {
  const resolvedStyle = typeof style === "function" ? style({ isActive: false }) : style;
  return React.createElement("a", { href: to, style: resolvedStyle, ...props }, children);
}

function Link({ children, to, ...props }) {
  return React.createElement("a", { href: to, ...props }, children);
}

function useParams() {
  return {};
}

module.exports = {
  BrowserRouter: Router,
  Link,
  MemoryRouter: Router,
  NavLink,
  Route,
  Routes,
  useParams,
};
