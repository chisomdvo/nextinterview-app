import { useRouter } from "next/dist/client/router";

export default function Login() {
    const router = useRouter();
    function nextpage(event){
        event.preventDefault();
        router.push('/fileupload');

    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
            </div>
            <form className="mt-8 space-y-6"  onSubmit={nextpage} method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Email address
                            </label>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
    
                        <div className=" mt-6 col-span-6 sm:col-span-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                            </label>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                        <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </div>
                    </div>
            </form>
          </div>
        </div>
    )
  }
  
  