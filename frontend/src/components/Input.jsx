const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-fuchsia-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-white bg-opacity-30 rounded-lg border border-indigo-200 focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400 text-gray-800 placeholder-gray-500 transition duration-200"
      />
    </div>
  );
};

export default Input;
