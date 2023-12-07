import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
export const getStaticProps = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();

  return {
    props: { jokes: data },
  };
};
function joke({ jokes }) {
  return (
    <>
      <Navbar />
      <main className={rubik.className}>
        <h2 className="flex pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          Smiley Joke
        </h2>
        <h3>{jokes.value}</h3>
      </main>
      <Footer />
    </>
  );
}

export default joke;
