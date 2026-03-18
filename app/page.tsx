  import Header from "./components/layout/Header";
  import Footer from "./components/layout/Footer";
  import Hero from "./components/sections/Hero";
  import WaktuTempat from "./components/sections/WaktuTempat";
  import Video from "./components/sections/Video";
  import Rsvp from "./components/sections/Rsvp";
  import Wishes from "./components/sections/Wishes";

  export default function Home() {
    return (
      <>
        <Header />

        <main>
          <Hero />
          <WaktuTempat />
          <Video />
          <Rsvp />
          <Wishes />
        </main>
        
        <Footer />
      </>
    );
  }
