import {Link} from "react-router-dom";

export default function Signup() {
    const onSubmit = (event) => {
        event.preventDefault()
        console.log("submit")
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-silver rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl leading-tight tracking-tight text-grey md:text-2xl">
                            Sign Up
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                            <div>
                                <input type="email" className="bg-gray-50 border border-gray-100 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="E-mail" required="" />
                            </div>
                            <div>
                                <input type="password" placeholder="Password" className="bg-gray-50 border border-gray-100 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium text-grey hover:underline">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-green hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                            <p className="text-sm font-light text-grey">
                                Don’t have an account yet? <Link to="/login" className="font-medium text-primary-600 hover:underline">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
