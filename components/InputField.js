import { useState } from "react";

const InputField = ({
  value,
  name,
  type,
  onChange,
  icon,
  className,
  placeholder,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative w-full">
      {icon && (
        <span
          className={`absolute text-xl pointer-events-none mb-0 pl-3 leading-tighter cursor-text top-1/2 transform -translate-y-1/2 text-body`}
        >
          {icon}
        </span>
      )}
      <input
        onFocusCapture={() => setIsActive(true)}
        onBlur={(event) => !event.target.value && setIsActive(false)}
        onKeyUp={() => true}
        type={type}
        value={value}
        name={name}
        className={`${
          className && className
        } text-body border-none appearance-none rounded transition duration-500 ease-in-out w-full px-3 ${
          icon ? "pl-10 py-3" : "py-3 pt-5 pb-2"
        }  focus focus:outline-none active:outline-none active:border-primary bg-lightDark focus:shadow-outline focus:ring-2 ring-offset-primary ring-offset-1`}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export const TextArea = ({ value, label, name, height, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={name}
          className={`absolute mb-0 pl-3 leading-tighter cursor-text transition-all duration-500 ease-in-out ${
            isActive
              ? "text-xs top-1 text-primary"
              : "text-base italic top-4 text-body"
          }`}
        >
          {label}
        </label>
      )}
      <textarea
        onFocusCapture={() => setIsActive(true)}
        onBlur={(event) => !event.target.value && setIsActive(false)}
        onKeyUp={() => true}
        value={value}
        name={name}
        className={`text-body h-${height} border-none appearance-none rounded transition duration-500 ease-in-out w-full px-3 py-3 pt-5 pb-2 focus focus:outline-none active:outline-none active:border-primary bg-lightDark focus:shadow-outline focus:ring-2 ring-offset-primary ring-offset-1`}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
