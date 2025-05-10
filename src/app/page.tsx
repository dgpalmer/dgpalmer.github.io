export default function Home() {
  return (
    <main className="container">
      <div className="flex flex-col sections">
        <div className="section flex flex-col w-full bg-slate-400 p-4">
          <div>
            <h1 className="text-2xl">my homepage goes here</h1>
          </div>
        </div>
        <div className="section flex flex-col w-full bg-slate-200 p-4">
          <h2 className="text-2xl">my homepage goes here</h2>
          <div className="block w-full h-24 bg-red">something here</div>
        </div>
        <div className="section flex flex-col w-full bg-slate-400 p-4">
          <h2 className="text-2xl">my homepage goes here</h2>
          <div className="block w-full h-24 bg-red">something here</div>
        </div>
      </div>
    </main>
  );
}
