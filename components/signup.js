import { useRouter } from "next/dist/client/router"

export default function Signup() {
    const router = useRouter();
    function nextpage(event){
        event.preventDefault();
        router.push('/login');

    }
    return (
        <div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Signup Form</h2>
                    </div>
                    <form className="mt-8 space-y-6"  onSubmit={nextpage} method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            First name
                            </label>
                            <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            required
                            autoComplete="given-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                            Last name
                            </label>
                            <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            required
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
    
                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                            Email address
                            </label>
                            <input
                            type="email"
                            name="email-address"
                            id="email-address"
                            required
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Country
                            </label>
                            <select
                            id="country"
                            name="country"
                            required
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                            <option>Nigeria</option>
                            <option>United States</option>
                            <option>Canada</option>
                            </select>
                        </div>
    
                        <div className="col-span-6">
                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                            Street address
                            </label>
                            <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            required
                            autoComplete="street-address"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
    
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                            City
                            </label>
                            <input
                            type="text"
                            name="city"
                            id="city"
                            required
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                            State / Province
                            </label>
                            <input
                            type="text"
                            name="region"
                            id="region"
                            required
                            autoComplete="address-level1"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
    
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                            ZIP / Postal code
                            </label>
                            <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            required
                            autoComplete="postal-code"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Signup
                        </button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
  

