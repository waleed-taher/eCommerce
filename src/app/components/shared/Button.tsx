
interface ButtonProps {
  onClick?: () => void;
  paddingx?: number;
  paddingy?: number;
  title: string;
}

const Button = ({ onClick, paddingx, paddingy, title }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick} // Uncomment this line
        className={`
          ${paddingx ? `px-${paddingx}` : "px-5"}
          ${paddingy ? `py-${paddingy}` : "py-2"}
          font-semibold 
          text-black 
          bg-[#ffece3] 
          shadow-md 
          rounded-md 
          cursor-pointer 
          hover:bg-[#191919] 
          hover:text-white 
          border-2 
          border-black 
        `}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
