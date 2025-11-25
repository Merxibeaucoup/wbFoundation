"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Heart, Mail, MapPin, Phone } from "lucide-react";
import { GalleryCarousel } from "../components/GalleryCarousel";
import { DynamicHeroBackground } from "../components/DynamicHeroBackground";
import AlbumViewer from "../components/AlbumViewer";

export default function Home() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState<{
    title: string;
    images: string[];
  } | null>(null);
  const albums = [
    {
      title: "Sports & Games",
      description: "Community sports event bringing youth together",
      coverImage: "/gallery/GCS_4171.jpg",
      images: ["/gallery/GCS_4171.jpg", "/gallery/GCS_3911.jpg"],
    },
    {
      title: "Celebrations & Give Back",
      description: "Annual celebratrions festival and give back",
      coverImage: "/w13.jpeg",
      images: [
        "/w10.jpeg",
        "/w4.jpg",
        "/w5.jpg",
        "/w3.jpg",
        "/gallery/GCS_4263.jpg",
      ],
    },
    {
      title: "Volunteer's & Staff",
      description: "Our dedicated team making a difference every day",
      coverImage: "/gallery/GCS_4423.jpg",
      images: ["/w9.jpeg", "/gallery/GCS_4359.jpg", "/gallery/GCS_4312.jpg"],
    },
    {
      title: "Education Programs",
      description: "Empowering children through quality education",
      coverImage: "/school-supplies-distribution-ghana.jpg",
      images: ["/school-supplies-distribution-ghana.jpg"],
    },
    {
      title: "Healthcare Outreach",
      description: "Bringing medical care to remote communities",
      coverImage: "/healthcare-clinic-ghana-africa.jpg",
      images: [],
    },
    {
      title: "Community Development",
      description: "Building sustainable infrastructure for the future",
      coverImage: "/solar-panel-installation-ghana-village.jpg",
      images: [],
    },
  ];

  const openAlbum = (album: { title: string; images: string[] }) => {
    setSelectedAlbum(album);
  };

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
            <source src="/videos/header.mp4" type="video/mp4" />
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
      {/* <section id="gallery" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Photo Albums
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Explore Our Albums
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Browse through our collection of memorable moments
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {albums.map((album, index) => (
              <button
                key={index}
                onClick={() =>
                  openAlbum({ title: album.title, images: album.images })
                }
                className="group relative overflow-hidden rounded-2xl h-72 text-left transition-transform hover:scale-105"
              >
                <img
                  src={album.coverImage || "/placeholder.svg"}
                  alt={album.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {album.images.length} Photos
                  </div>
                  <h3 className="text-xl font-bold">{album.title}</h3>
                  <p className="mt-2 text-sm text-white/90">
                    {album.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedAlbum && (
        <AlbumViewer
          isOpen={!!selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
          albumTitle={selectedAlbum.title}
          images={selectedAlbum.images}
        />
      )} */}
      <section id="gallery" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mx-auto mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
              📸 Photo Albums
            </div>
            <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Memories
              </span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of impactful moments
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 auto-rows-[280px]">
            {/* Large featured album - takes up 2 rows and 2 columns on large screens */}
            <button
              onClick={() =>
                openAlbum({ title: albums[0].title, images: albums[0].images })
              }
              className="group relative overflow-hidden rounded-3xl lg:col-span-6 lg:row-span-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <img
                src={albums[0].coverImage || "/placeholder.svg"}
                alt={albums[0].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-md border border-white/30">
                  <span className="text-2xl">📷</span>
                  {albums[0].images.length} Photos
                </div>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {albums[0].title}
                </h3>
                <p className="text-base text-white/95 max-w-md">
                  {albums[0].description}
                </p>
              </div>
            </button>

            {/* Medium album - takes up 1 row and spans columns */}
            <button
              onClick={() =>
                openAlbum({ title: albums[1].title, images: albums[1].images })
              }
              className="group relative overflow-hidden rounded-3xl lg:col-span-6 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-1"
            >
              <img
                src={albums[1].coverImage || "/placeholder.svg"}
                alt={albums[1].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-md border border-white/30">
                  <span>🎉</span>
                  {albums[1].images.length} Photos
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                  {albums[1].title}
                </h3>
                <p className="text-sm text-white/90 line-clamp-2">
                  {albums[1].description}
                </p>
              </div>
            </button>

            {/* Compact albums in a row */}
            <button
              onClick={() =>
                openAlbum({ title: albums[2].title, images: albums[2].images })
              }
              className="group relative overflow-hidden rounded-3xl lg:col-span-3 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <img
                src={albums[2].coverImage || "/placeholder.svg"}
                alt={albums[2].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/30">
                  <span>👥</span>
                  {albums[2].images.length}
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {albums[2].title}
                </h3>
                <p className="text-xs text-white/85 line-clamp-2">
                  {albums[2].description}
                </p>
              </div>
            </button>

            <button
              onClick={() =>
                openAlbum({ title: albums[3].title, images: albums[3].images })
              }
              className="group relative overflow-hidden rounded-3xl lg:col-span-3 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-1"
            >
              <img
                src={albums[3].coverImage || "/placeholder.svg"}
                alt={albums[3].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/30">
                  <span>📚</span>
                  {albums[3].images.length}
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors">
                  {albums[3].title}
                </h3>
                <p className="text-xs text-white/85 line-clamp-2">
                  {albums[3].description}
                </p>
              </div>
            </button>

            {/* Tall album spanning 2 rows */}
            <button
              onClick={() =>
                openAlbum({ title: albums[4].title, images: albums[4].images })
              }
              className="group relative overflow-hidden rounded-3xl lg:col-span-4 lg:row-span-1 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <img
                src={albums[4].coverImage || "/placeholder.svg"}
                alt={albums[4].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-md border border-white/30">
                  <span>🏥</span>
                  {albums[4].images.length} Photos
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {albums[4].title}
                </h3>
                <p className="text-sm text-white/95">{albums[4].description}</p>
              </div>
            </button>

            {/* Wide album */}
            <button
              onClick={() =>
                openAlbum({ title: albums[5].title, images: albums[5].images })
              }
              className="group relative overflow-hidden rounded-3xl lg:col-span-8 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-1"
            >
              <img
                src={albums[5].coverImage || "/placeholder.svg"}
                alt={albums[5].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-md border border-white/30">
                  <span>🌍</span>
                  {albums[5].images.length} Photos
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                  {albums[5].title}
                </h3>
                <p className="text-sm text-white/90">{albums[5].description}</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {selectedAlbum && (
        <AlbumViewer
          isOpen={!!selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
          albumTitle={selectedAlbum.title}
          images={selectedAlbum.images}
        />
      )}

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
