function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,    
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#333333]">
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}