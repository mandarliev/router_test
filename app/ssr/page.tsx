type Repo = {
  name: string;
  stargazers_count: number;
};

async function getServerSideProps(): Promise<Repo> {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  return res.json();
}

export default async function Page() {
  const repo = await getServerSideProps();
  return (
    <section>
      <h1 className="text-2xl font-semibold">{repo.name}</h1>
      <p className="text-gray-700 mt-4">{repo.stargazers_count}</p>
    </section>
  );
}
