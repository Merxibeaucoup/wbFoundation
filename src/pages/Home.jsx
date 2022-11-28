import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Goals from "../components/Goals";
import GoalsList from "../components/GoalsList";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Support from "../components/Support";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Goals />
      <GoalsList />
      <Support />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
