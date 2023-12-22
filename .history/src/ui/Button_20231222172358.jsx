import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className = "tracking-width activate:bg-slate-400 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold
                    uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 
                    focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed
                    sm:px-6 sm:py-4"

  if(to)
  return<Link>{children}</Link>




  return (
    <button
      disabled={disabled}
      className= {className}
    >
      {children}
    </button>
  );
}

export default Button;
