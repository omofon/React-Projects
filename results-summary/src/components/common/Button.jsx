function Button({ text }) {
  return (
    <button className="w-full rounded-full bg-dark-grey-blue text-white text-center p-5 cursor-pointer hover:bg-linear-b hover:from-light-slate-blue hover:to-light-royal-blue">
      {text}
    </button>
  );
}

export default Button;
