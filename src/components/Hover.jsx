

export default function Hover({ children, className = "", ...props }){


  return (
   <span className="group relative inline-block rounded-full cursor-pointer">
  <span className="absolute inset-0 rounded-full  opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"></span>

  <span className="relative z-10 px-[.4rem] py-[.5rem] text-black transition-all duration-200 
hover:bg-white/70 hover:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.08)] 
hover:rounded-md">
    {children}
  </span>
</span>

  );
};


