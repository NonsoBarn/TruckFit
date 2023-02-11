import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section class="h-screen w-full flex flex-col justify-center items-center ">
      <h1 class="text-9xl font-extrabold text-gray-800 tracking-widest">404</h1>
      <div class="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5 ">
        <Link
          to="/"
          class="relative inline-block text-sm font-medium text-white
         group active:text-white  focus:outline-none focus:ring"
        >
          <span class="relative block px-8 py-3 bg-blue-600 rounded-md border border-current">
            Go Home
          </span>
        </Link>
      </button>
    </section>
  );
};

export default NotFound;
