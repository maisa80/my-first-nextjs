import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";
import { Rubik } from "next/font/google";
import Image from "next/image";

const rubik = Rubik({ subsets: ["latin"] });
export const getStaticProps = async () => {
  //Number of Facts to retrieve.
  //If set to one, response will be a fact object. If many, response will be an array of Facts
  const resDog = await fetch("http://shibe.online/api/shibes?count=5");
  const resCat = await fetch("http://shibe.online/api/cats?count=5");
  const resBird = await fetch("http://shibe.online/api/birds?count=5");

  const dataDog = await resDog.json();
  const dataCat = await resCat.json();
  const dataBird = await resBird.json();

  return {
    props: { dogs: dataDog, cats: dataCat, birds: dataBird },
  };
};
function cuteAnimals({ dogs, cats, birds }) {
  return (
    <>
      <Navbar />
      <main className={rubik.className}>
        <h1>Cute animal</h1>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                {dogs.map((dog) => (
                  <Image
                    src={dog}
                    alt=""
                    width={300}
                    height={200}
                    key={dog}
                    className="block rounded-lg object-cover object-center"
                  />
                ))}
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                {cats.map((cat) => (
                  <Image
                    src={cat}
                    alt=""
                    width={200}
                    height={200}
                    key={cat}
                    className="block w-full rounded-lg object-cover object-center"
                  />
                ))}
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                {birds.map((bird) => (
                  <Image
                    src={bird}
                    alt=""
                    width={300}
                    height={300}
                    key={bird}
                    className="block rounded-lg object-cover object-center"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default cuteAnimals;
