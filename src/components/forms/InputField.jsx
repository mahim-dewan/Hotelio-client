
const InputField = ({icon, type, placeholder, required = true, ...rest}) => {
  return (
    <div className="flex items-center w-full my-2 border bg-transparent border-muted/30 rounded gap-1 pl-2 px-4">
      {icon && icon}
      <input
        className="w-full outline-none bg-transparent py-2.5"
        type={type}
        placeholder={placeholder}
        required = {required}
        {...rest}
      />
    </div>
  );
};

export default InputField;
