import { MyInput } from "./components/MyInput";
import { InputWrapper } from "./components/InputWrapper";

function App() {
  return (
    <div className="flex flex-col w-40 justify-center m-auto">
      <InputWrapper>
        <MyInput type="email" label="Enter email address" />
      </InputWrapper>
    </div>
  );
}

export default App;
