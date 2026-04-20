"use client";
import Header from "../components/Ui/Header/Header";
import Home from "../components/Home/Home";
import Offer from "../components/Offer/Offer";
import About from "../components/About/About";
import Info from "../components/Info/Info";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Ui/Footer/Footer";
import { Element } from "react-scroll";

export default function App() {
  return (
    <>
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="offer">
        <Offer />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Info />
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}
