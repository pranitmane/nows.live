import Message from './components/message'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-20">
      <div className="p-14 relative z-0">
        <div className="absolute rounded-xl w-full h-full blur-3xl bg-gradient-to-r from-[#66B3FF]/30 to-[#FFB366]/30 top-0 left-0 z-[-10]">
        </div>

        <h1 className="bg-gradient-to-r from-[#66B3FF] to-[#FFB366] text-transparent bg-clip-text text-6xl font-bold text-center">NOWS</h1>
        <h2 className="text-2xl text-center text-neutral-200 font-semibold">Live in Present.</h2>
      </div>
      {/* <h1 className="text-lg text-neutral-400 tracking-widest typing">Coming Soon..</h1> */}
      <Message text="Coming Soon.." />
    </main>
  );
}
