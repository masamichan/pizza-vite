function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="tracking-width activate:bg-slate-400 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold
                uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 
                focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default Button;
