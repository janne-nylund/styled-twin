import { useId } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const StyledLabel = styled.label(() => [
  tw`
    w-80
    text-xs
    block
    transition-all
    translate-x-1
    translate-y-5
    duration-200
    opacity-100
    absolute
    -top-5 left-4 
    peer-placeholder-shown:text-base
    peer-placeholder-shown:left-4 
    peer-placeholder-shown:top-3 
    peer-placeholder-shown:text-gray-400 
    peer-focus:text-xs 
    peer-focus:-top-6 
    peer-focus:left-4
    peer-focus:uppercase  
    peer-focus:text-green-600 
    peer-focus:font-bold
  `,
]);

const StyledInput = styled.input(() => [
  tw`
  w-80
  text-gray-500
  m-auto
  p-3
  border
  border-gray-200
  block
  shadow-lg
  rounded-3xl
  placeholder:text-gray-300
  placeholder:transition-all
  focus:outline-none
  focus:ring-1
  focus:ring-green-600
  focus:ring-offset-2
  focus:shadow-xl
`,
]);

export const MyInput = ({ type, label }) => {
  // useId is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.
  const id = useId();
  return (
    <>
      <StyledInput
        id={id}
        placeholder=" "
        type={type}
        autoComplete="off"
        spellCheck="false"
        className="peer"
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </>
  );
};
