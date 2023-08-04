import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-8">
    <h1 className="font-bold text-5xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex">Hello Tailwind</h1>
    <button disabled className="bg-sky-400 px-4 py-2 rounded-md font-medium text-slate-50 mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
      Sign in
    </button>

    </div>
  )
}
