import Nav from "./nav";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
