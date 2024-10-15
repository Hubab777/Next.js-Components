import Header from "./components/Header";
import About from "./components/About";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <h1 style={{
          color: '#000000',
          fontSize: '2.3rem',
          backgroundColor: '#D8EEDF',
          padding: '10px',
          borderRadius: '5px'
      }}>
        This is the Homepage of Website
      </h1>
      <br />
      <About />
      <br />
      <div className="flex justify-center">
      <img src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png" alt="Next.js image" style={{ width: '600px', height: 'auto' }} />
      </div>
    </div>
  );
}

