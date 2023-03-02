import React from "react";
import ContactForm from "../components/ContactForm";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Goals from "../components/Goals";
import GoalsList from "../components/GoalsList";
import Header from "../components/Header";
import Hope from "../components/Hope";
import Navbar from "../components/Navbar";
import Support from "../components/Support";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Goals />
      <GoalsList />
      {/* <Hope /> */}
      <Support />
      <Gallery />
      <Events />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
