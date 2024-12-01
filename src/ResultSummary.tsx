import data from '../data.json'; // Adjusted path for main directory

const ResultSummary = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-[800px] h-[500px] rounded-3xl bg-gr bg-gray-100 shadow-lg flex justify-center items-center">
          <div className="flex justify-center items-center h-full">
            {/* Inner container with custom gradient for the circle */}
            <div className="w-full md:w-[400px] h-full rounded-3xl bg-gradient-to-t from-custom-blue via-custom-blue-light to-custom-blue-light mr-[20px] flex flex-col items-center justify-start">

              <h1 className="text-white text-2xl mt-[40px]">Your Result</h1>
              <div className="w-[150px] h-[150px] mt-[40px] flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-custom-darkblue to-transparent md:w-[200px] md:h-[200px]">
                <h1 className="text-4xl md:text-5xl text-white font-bold">76</h1>
                <p className="text-gray-400 mt-[15px]">of 100</p>
              </div>
              <h1 className="mt-[30px] text-3xl text-white">Great</h1>
              <p className="text-gray-100 text-center mt-[20px]">
                you scored higher than <br />
                65% of the people who have taken <br />
                this test.
              </p>
            </div>
          </div>
          {/* Summary Container */}
          <div className="w-full md:w-[400px] h-full rounded-3xl flex flex-col items-center justify-start">
            <h1 className="text-2xl mt-[40px] mr-[240px]">Summary</h1>
            <div className="flex flex-col items-start mt-[20px] w-full px-[20px]">
              {data.map((item, index) => {
                // Define colors for each category
                const colors = {
                  "Reaction": {
                    text: 'hsl(0, 100%, 67%)', // Light red
                    bg: 'hsl(0, 100%, 87%, 0.3)' // Light red blurred
                  },
                  "Memory": {
                    text: 'hsl(39, 100%, 56%)', // Orangey yellow
                    bg: 'hsl(39, 100%, 76%, 0.3)' // Orangey yellow blurred
                  },
                  "Verbal": {
                    text: 'hsl(166, 100%, 37%)', // Green teal
                    bg: 'hsl(166, 100%, 83%, 0.3)' // Green teal blurred
                  },
                  "Visual": {
                    text: 'hsl(234, 85%, 45%)', // Deep blue
                    bg: 'hsl(234, 85%, 85%, 0.3)' // Deep blue blurred
                  }
                };

                // Get the colors based on the category
                const { text, bg } = colors[item.category] || { text: 'text-black', bg: 'bg-gray-200' }; // Fallback colors

                return (
                  <div 
                    key={index} 
                    className={`flex items-center mb-[20px] w-full p-[10px] rounded-lg`} 
                    style={{ backgroundColor: bg }} // Set the background color
                  >
                    <img 
                      src={item.icon} 
                      alt={item.category} 
                      className="w-[40px] h-[40px] mr-[10px] object-contain" // Control icon size
                    />
                    <div className="flex flex-grow justify-between items-center">
                      <span 
                        className="text-lg font-semibold" 
                        style={{ color: text }} // Apply the text color
                      >
                        {item.category}
                      </span>
                      <span className="text-lg font-semibold text-black ml-[10px]">
                        {item.score} <span className='text-gray-400'>/ 100</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="w-full max-w-[320px] mt-[20px] bg-gray-800 rounded-3xl text-white py-2 px-4 hover:bg-blue-500 transition duration-300">
                Continue
            </button>
          </div>
        </div>
      </div>
    );
};

export default ResultSummary;
