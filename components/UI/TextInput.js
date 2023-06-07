const TextInput = ({ label, name, error, helpText, className, ...props }) => {
  return (
    <div className={`relative w-full z-0 group ${className ? className : ""}`}>
      <input
        type="text"
        name={name}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer ${
          error && "!border-red-500"
        }`}
        {...props}
        placeholder=" "
      />
      {helpText && (
        <p className="text-xs mt-1 text-red-500 font-medium">{helpText}</p>
      )}
      <label
        for={name}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
