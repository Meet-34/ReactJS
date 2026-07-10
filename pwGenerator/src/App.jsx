import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordReference = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charsAllowed) str += "~!@#$%^&*";

    for(let i=0; i<length; i++){
      let char = Math.floor( Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charsAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordReference?.select();
    passwordReference?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charsAllowed, passwordGenerator])

  return (
    <>
      {/* outer container */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 p-1">
        <h1 className="text-white text-center my-2">Password Generator</h1>

        {/* password slot */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-center bg-white " 
          placeholder="Password"
          readOnly
          ref={passwordReference}/>
          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>

        {/* div */}
        <div className="flex text-sm gap-x-2">

          {/* slider */}
          <div className="flex items-center gap-x-1">
            <input type="range"
            min = {6}
            max = {18}
            value = {length}
            className = "cursor-pointer"  
            onChange={(e) => {
              setLength(e.target.value)
            }}
            />
            <label>Length: {length}</label>
          </div>
        

        {/* checkbox1 */}
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);          
          }} 
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* checkbox2 */}
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked={charsAllowed}
          id="charInput"
          onChange={() => {
            setCharsAllowed((prev) => !prev);          
          }} 
          />
          <label htmlFor="charInput">Characters</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
