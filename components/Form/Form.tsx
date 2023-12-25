// <<<<<<< HEAD
// "use client";
// import { useRef, ReactNode } from "react";

// interface FormProps {
//   children: ReactNode
//   action :(formData:FormData)=> Promise<void | boolean>;
//   className?: string
//   onSubmit?: () => void

// }

// const Form: React.FC<FormProps>  = ({children,action,className,onSubmit}:FormProps) => {
//   const ref =useRef<HTMLFormElement>(null)
//   return (
    
//   <form 
//   className={className} 
//   onSubmit={onSubmit} 
//   ref={ref} 
//   action={async (formData)=>{
//     await action(formData);
//     ref.current?.reset();
//   }}>
//   {children}
//   </form>

//   )
// }

// export default Form
// =======
"use client";
import { useRef, ReactNode } from "react";

interface FormProps {
  children: ReactNode
  action :(formData:FormData)=> Promise<void | boolean>;
  className?: string
  onSubmit?: () => void

}

const Form: React.FC<FormProps>  = ({children,action,className,onSubmit}:FormProps) => {
  const ref =useRef<HTMLFormElement>(null)
  return (
    
  <form 
  className={className} 
  onSubmit={onSubmit} 
  ref={ref} 
  action={async (formData)=>{
    await action(formData);
    ref.current?.reset();
  }}>
  {children}
  </form>

  )
}

export default Form
