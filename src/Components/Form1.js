import React from "react";

import { useState } from "react";

const Form1 = () => {
  const [textvalue, settextvalue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted:", textFieldValue);
  };

  const handletextSubmit = (e) => {
    e.preventDefault();

    console.log("text Submitted:", textvalue);
  };

  const [passvalue, setpassvalue] = useState("");

  const handlepassSubmit = (e) => {
    e.preventDefault();

    console.log("text Submitted:", passvalue);
  };

  const [checkboxValues, setCheckboxValues] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (option) => {
    setCheckboxValues({
      ...checkboxValues,
      [option]: !checkboxValues[option],
    });

    console.log(checkboxValues);
  };
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleFormSubmit = () => {
    const predefinedText = "Tanay";
    const predefinedPassword = "Tanay";

    if (textvalue === predefinedText && passvalue === predefinedPassword) {
      console.log("Success");
      window.alert("success");
      console.log(textvalue);
      console.log(textFieldValue);
    } else {
      console.log("Invalid credentials");
      window.alert("Invalid credential");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]">
        <div className="h-[400px] flex justify-center items-center w-[300px] bg-[url('https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTM4MjA0fHxlbnwwfHx8fHw%3D')]">
          <div className="text-[#E6C591] text-shadow-md font-extrabold text-[30px] transition duration-300 hover:text-[#FFD700]">
            Hey! Login here
          </div>
        </div>

        <div className="h-[400px] w-[300px]  bg-opacity-60  p-4 bg-[rgba(0,0,0,0.8)] backdrop-blur-[10px] backdrop-saturate-[180%]">
          {/* bg-[#080A0F] */}
          <div className="mt-[75px] mr-[44px] items-start  hover:transform scale-200">
            <form className="" onSubmit={handletextSubmit}>
              <input
                type="text"
                value={textvalue}
                onChange={(e) => settextvalue(e.target.value)}
                placeholder="Enter username"
                className="border border-solid border-[#E6C591] bg-[#080A0F] text-[#E6C591] px-2 py-1 focus:ring-2 focus:ring-[#E6C591] focus:outline-none shadow-md"
              />
            </form>
            <select
              value={textFieldValue}
              onChange={(e) => {
                setTextFieldValue(e.target.value);
                console.log(e.target.value);
              }}
              className="border border-solid border-[#E6C591] mt-3 mb-2 bg-[#080A0F] px-2 py-1 focus:ring-2 focus:ring-[#E6C591] focus:outline-none text-[#E6C591]"
              placeholder="Choose Category"
            >
              <option value="" disabled hidden>
                Choose Category
              </option>
              <option className="bg-[#080A0F] bg-opacity-80" value="cat1">
                cat1
              </option>
              <option value="cat2" className="bg-[#080A0F] bg-opacity-80">
                cat2
              </option>
              <option value="cat3">cat3</option>
            </select>
            <div>
              <label className="flex items-center justify-center space-x-2 text-[#E6C591]">
                <input
                  type="checkbox"
                  checked={checkboxValues.option1}
                  onChange={() => handleCheckboxChange("option1")}
                  //   className="border border-solid border-[#E6C591] bg-[#080A0F] p-2"
                  className="bg-[#080A0F] bg-opacity-80"
                />
                <span>SVVV</span>
              </label>

              <label className="flex  items-center justify-center -ml-4 space-x-2 text-[#E6C591]">
                <input
                  type="checkbox"
                  checked={checkboxValues.option2}
                  onChange={() => handleCheckboxChange("option2")}
                  className="border border-solid border-[#E6C591] bg-[#080A0F] p-2"
                />
                <span className="">cse</span>
              </label>

              <label className="flex items-center justify-center -ml-4 space-x-2 text-[#E6C591]">
                <input
                  type="checkbox"
                  checked={checkboxValues.option3}
                  onChange={() => handleCheckboxChange("option3")}
                  className="border border-solid border-[#E6C591] bg-[#080A0F] p-2"
                />
                <span>A.I</span>
              </label>
              <form className=" m-4" onSubmit={handlepassSubmit}>
                <input
                  type="text"
                  value={passvalue}
                  onChange={(e) => setpassvalue(e.target.value)}
                  placeholder="enter pass"
                  style={{
                    color: "#E6C591",
                  }}
                  className="border border-solid border-[#E6C591] bg-[#080A0F] px-2 py-1 focus:ring-2 focus:ring-[#E6C591] focus:outline-none"
                />
              </form>

              <button
                className="bg-[#080A0F] border border-solid text-white rounded-md px-2 py-1 mt-7"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form1;
