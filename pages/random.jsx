import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
export const getStaticProps = async () => {
  //Number of Facts to retrieve.
  //If set to one, response will be a fact object. If many, response will be an array of Facts
  const res = await fetch(
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3"
  );
  const res1 = await fetch(
    "https://cat-fact.herokuapp.com/facts/random?animal_type=horse&amount=3"
  );
  const res2 = await fetch(
    "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=3"
  );
  const data = await res.json();
  const data1 = await res1.json();
  const data2 = await res2.json();

  return {
    props: { cat: data, horse: data1, dog: data2 },
  };
};

function random({ cat, horse, dog }) {
  return (
    <>
      <Navbar />
      <main className={rubik.className}>

        <h3>
          Cats:{" "}
          
          {cat &&
            cat.map((c) => (
              <div key={c._id} className="card my-5">
                <h3>{c.text}</h3>
              </div>
            ))}
        </h3>
        <h3>
          Horse:{" "}
          {horse &&
            horse.map((h) => (
              <div key={h._id} className="card my-5">
                <h3>{h.text}</h3>
              </div>
            ))}
        </h3>
        <h3>
          Dog:{" "}
          {dog &&
            dog.map((d) => (
              <div key={d._id} className="card my-5">
                <h3>{d.text}</h3>
              </div>
            ))}
        </h3>
      </main>
      <Footer />
    </>
  );
}

export default random;
