import AnimeCard, { AnimeProp } from "./components/anime-card";
import Spinner from "./components/spinner";
import { data } from "./lib/data";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <Spinner />
    </main>
  )
}
