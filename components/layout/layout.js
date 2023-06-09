import MainNavigation from "./main-navigation";

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
