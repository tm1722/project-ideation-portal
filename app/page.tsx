import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex h-screen bg-white">
      <div className="absolute top-4 left-4 bg-gray-200 p-2 rounded">
        <span className="text-black font-bold">Project Ideation Portal</span>
      </div>
      <div className="absolute top-4 right-4">
        <Link
          href="/protected"
          className="relative group"
        >
          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">U</span>
          </div>
          <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Login
          </span>
        </Link>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex space-x-3"></div>
      </div>
    </div>
  );
}
