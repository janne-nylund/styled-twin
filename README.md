<h1>Styled Components with Tailwind using Twin.Macro</h1>

<h3>Structure tree</h3>
📦src<br/>
 ┣ 📁components<br/>
 ┃ ┣ 📄InputWrapper.jsx<br/>
 ┃ ┗ 📄MyInput.jsx<br/>
 ┣ 📄App.js<br/>
 ┣ 📄index.css<br/>
 ┗ 📄index.js<br/><br/>

```javascript
// "plain" Styled Components
const StyledLabel = styled.label`
  color: rgb(14, 182, 90);
  font-size: 0.8rem;
  font-weight: bold;
  font-variant: small-caps;
  margin-left: 1.5rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.2s;
  transform: translate(-0.5rem, -5.2rem);
`;

const StyledInput = styled.input`
  color: #333;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
  border: 1px solid hsl(0, 0%, 90%);
  border-radius: 50px;
  display: block;
  box-shadow: 0 1px 24px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: hsl(0, 0%, 75%);
    transition: all 0.2s;
  }

  &:focus {
    outline: 1px solid rgba(0, 153, 70, 0.3);
    outline-offset: 2px;
    box-shadow: 0 1px 16px rgba(0, 153, 70, 0.1);
  }

  &:placeholder-shown + ${StyledLabel} {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
  }
`;

export const MyInput = ({ type, label }) => {
  return (
    <>
      <StyledInput
        id="inputId"
        placeholder=" "
        type={type}
        autoComplete="off"
        spellCheck="false"
        className="peer"
      />
      <StyledLabel htmlFor="inputId">{label}</StyledLabel>
    </>
  );
};
```

```javascript
// Tailwind version with Twin.Macro
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
    peer-focus:-top-5 
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
  return (
    <>
      <StyledInput
        id="inputId"
        placeholder=" "
        type={type}
        autoComplete="off"
        spellCheck="false"
        className="peer"
      />
      <StyledLabel htmlFor="inputId">{label}</StyledLabel>
    </>
  );
};
```
