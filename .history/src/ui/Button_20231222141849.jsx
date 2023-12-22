function Button({ children, disable }) {
  return (
    <Button
      disable={disable}
      className="md:py-3; w-full rounded-full border border-stone-200 px-4 py-2
          text-sm transition-all duration-300
          placeholder:text-stone-400 focus:outline-none focus:ring
          focus:ring-yellow-400 md:px-6"
    >
      {children}
    </Button>
  );
}

export default Button;
