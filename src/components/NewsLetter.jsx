import useCustomInp from "../Custom_State/useCustomInp";

function NewsLetter() {
  const [inputVal, setInputVal] = useCustomInp("email", () => "");

  return (
    <div className="bg-[#ef6027] px-4 w-full py-16">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-white font-semibold text-xl">
            Sign Up for Newsletters
          </h1>
          <p>Get E-mail updates about our latest shop and special</p>
        </div>
        <div className="my-4">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            type="email"
            className="py-2 px-4 caret-[#ef6027] rounded-l-md"
          />
          <button type="button" className="bg-[#eee] py-2 px-2 rounded-r-md">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
