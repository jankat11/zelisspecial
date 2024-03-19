import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  /* (initialLoad && isHomePage) && "opacity-0" */
  return (
    <>
      <header className={`text-secondary w-full z-30 absolute`}>
        <Header />
      </header>
      <main className={`bg-white text-secondary h-full w-full`}>
        {children}
      </main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
