function alertButton() {
  alert("Thank you!");
}

function Button({ text }) {
  return (
    <button
      onClick={alertButton}
      className="w-full rounded-full bg-dark-grey-blue text-white text-center text-xl font-bold py-4 cursor-pointer hover:bg-linear-to-b hover:from-light-slate-blue hover:to-light-royal-blue transition-colors duration-300"
    >
      {text}
    </button>
  );
}

export default Button;
