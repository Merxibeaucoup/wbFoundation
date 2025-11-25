"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Heart, Mail, MapPin, Phone } from "lucide-react";
import { GalleryCarousel } from "../components/GalleryCarousel";
import { DynamicHeroBackground } from "../components/DynamicHeroBackground";

export default function Home() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ce465a1c6128ed20d7c8b3d47f44dcc7",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    }
  };

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm({
      ...contactForm,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between mx-auto px-4">
          {/* <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 fill-primary text-primary" />
            <span className="text-xl font-bold">Hope for Ghana</span>
          </div> */}
          <div className="flex items-center gap-2">
            <img
              src="/logo/q1.jpeg"
              alt="Hope for Ghana"
              className="h-12 w-auto object-contain"
            />
          </div>
          <nav className="hidden gap-6 md:flex">
            <a
              href="#home"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Gallery
            </a>
            <a
              href="#events"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Events
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </a>
            <a
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </a>
          </nav>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            <a href="#donate">Donate Now</a>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      {/* <section
        id="home"
        className="relative flex min-h-[600px] items-center justify-center overflow-hidden"
      >
        <DynamicHeroBackground />
        <div className="container relative z-10 px-4 py-24 text-center mx-auto">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Empowering Communities Across Ghana
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Join us in making a lasting impact. Together, we're building
              brighter futures through education, healthcare, and community
              development.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                <a href="#donate">Make a Donation</a>
              </button>
              <button className="rounded-lg border-2 border-white bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20">
                <a href="#events">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-[600px] items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/public/videos/header.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 px-4 py-24 text-center mx-auto">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Empowering Communities Across Ghana
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Join us in making a lasting impact. Together, we're building
              brighter futures through education, healthcare, and community
              development.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                <a href="#donate">Make a Donation</a>
              </button>
              <button className="rounded-lg border-2 border-white bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20">
                <a href="#events">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
              <div className="relative space-y-6">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  About Us
                </div>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Building a Brighter Future for Ghana
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded in 2020,{" "}
                <span className="font-semibold text-foreground">
                  WB Helping Hands
                </span>{" "}
                is dedicated to improving lives across Ghana through sustainable
                development programs that create lasting change.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We believe every person deserves access to quality education,
                healthcare, and economic opportunities. Through partnerships
                with local communities, we empower individuals and strengthen
                families.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our approach is community-centered, ensuring that the people we
                serve are at the heart of every decision we make. Together,
                we're building a brighter future for Ghana.
              </p>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <button className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                  <a href="#donate">Support Our Mission</a>
                </button>
                <button className="rounded-lg border border-input bg-background px-6 py-3 text-base font-semibold hover:bg-accent">
                  <a href="#contact">Get Involved</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Impact
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              See the Difference We Make
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real stories from communities across Ghana
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl h-64">
              <img
                src="/children-studying-in-classroom-ghana.jpg"
                alt="Children in classroom"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">Education Programs</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-64">
              <img
                src="/healthcare-clinic-ghana-africa.jpg"
                alt="Healthcare clinic"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">Healthcare Access</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-64">
              <img
                src="/community-gathering-ghana-village.jpg"
                alt="Community gathering"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">Community Building</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl md:col-span-2 h-64">
              <img
                src="/clean-water-well-ghana-village-celebration.jpg"
                alt="Water well project"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">Clean Water Projects</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl h-64">
              <img
                src="/agricultural-training-ghana-farmers.jpg"
                alt="Agricultural training"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold">Agricultural Support</h3>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => setIsCarouselOpen(true)}
              className="rounded-full border border-input bg-background px-6 py-3 text-base font-semibold hover:bg-accent"
            >
              See More Photos
            </button>
          </div>
        </div>
      </section>

      <GalleryCarousel
        isOpen={isCarouselOpen}
        onClose={() => setIsCarouselOpen(false)}
      />

      {/* Events Section */}
      <section id="events" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Join Us
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Be part of our community events and fundraisers
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
                <Calendar className="h-4 w-4" />
                <span>December, 2025</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Provisions & Meal Packaging
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Join us for an evening of celebration and giving back. All
                proceeds support our programs.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Accra, Ghana</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
                <Calendar className="h-4 w-4" />
                <span>December, 2025</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Community sports and games
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Building solid relationships go a long way. One way of doing
                that is by doing activities we enjoy together.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Accra, Ghana</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
                <Calendar className="h-4 w-4" />
                <span>January, 2026</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Volunteer Appreciation Day
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Celebrating our amazing volunteers who make our work possible.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section
        id="donate"
        className="relative overflow-hidden bg-primary py-24 text-primary-foreground"
      >
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px] opacity-20" />
        <div className="container relative text-center mx-auto px-4">
          <div className="mx-auto max-w-2xl space-y-8">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Make a Difference Today
            </h2>
            <p className="text-xl leading-relaxed opacity-95">
              Your donation directly supports communities in need. Every
              contribution, no matter the size, helps us build a brighter future
              for Ghana.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-base font-semibold text-foreground shadow-lg hover:bg-background/90"
              >
                <Heart className="h-4 w-4" />
                Donate with Stripe
              </Link>
              <button className="rounded-full border-2 border-primary-foreground bg-transparent px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Become a Partner
              </button>
            </div>
            <p className="text-sm opacity-75">
              Secure payments powered by Stripe. Tax receipts provided for all
              donations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Contact
              </div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                Get in Touch
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Have questions or want to learn more about our work? We'd love
                to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a
                      href="mailto:info@hopeforghana.org"
                      className="text-muted-foreground hover:text-primary"
                    >
                      wbhelpinghands22@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a
                      href="tel:+233123456789"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +1 401 249 4399
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Office</div>
                    <p className="text-muted-foreground">
                      Pawtucket, Rhode Island, USA 02867
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-card p-8 shadow-xl">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="w-full rounded-xl border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    className="w-full rounded-xl border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    className="w-full rounded-xl border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  />
                </div>
                {submitMessage && (
                  <div
                    className={`rounded-xl p-4 text-sm ${
                      submitMessage.includes("success")
                        ? "bg-green-500/10 text-green-500"
                        : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              {/* <div className="mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 fill-primary text-primary" />
                <span className="font-bold">Hope for Ghana</span>
              </div> */}
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 fill-primary text-primary" />
                <img
                  src="/logo/q1.jpeg"
                  alt="Hope for Ghana"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Building brighter futures through education, healthcare, and
                community development.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-primary">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#events" className="hover:text-primary">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Get Involved</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/donate" className="hover:text-primary">
                    Donate
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Partner With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Fundraise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Follow Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 WB Helping Hands. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
