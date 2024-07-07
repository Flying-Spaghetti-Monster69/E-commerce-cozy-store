import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, NavBar } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <NavBar />
      {isPageLoading ? <Loading /> : <Outlet />}
    </>
  );
};
export default HomeLayout;
