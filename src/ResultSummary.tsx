import data from '../data.json';
import assets from './assets/assets'; // Ensure this path is correct

type Category = 'Reaction' | 'Memory' | 'Verbal' | 'Visual';

const ResultSummary = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-center items-center h-screen">
        <div className="w-full max-w-[800px] h-[550px] rounded-3xl bg-gray-100 shadow-lg flex flex-col sm:flex-row justify-center items-center">
          {/* Left Container (Result) */}
          <div className="w-full sm:w-[400px] h-full rounded-3xl bg-gradient-to-t from-custom-blue via-custom-blue-light to-custom-blue-light flex flex-col items-center justify-start p-5">

            <h1 className="text-white text-2xl mt-[10px]">Your Result</h1>
            <div className="w-[150px] h-[150px] mt-[40px] flex flex-col justify-center items-center rounded-full bg-gradient-to-b from-custom-darkblue to-transparent sm:w-[200px] sm:h-[200px]">
              <h1 className="text-4xl sm:text-5xl text-white font-bold">76</h1>
              <p className="text-gray-400 mt-[15px]">of 100</p>
            </div>
            <h1 className="mt-[30px] text-3xl text-white">Great</h1>
            <p className="text-gray-100 text-center mt-[20px]">
              you scored higher than <br />
              65% of the people who have taken <br />
              this test.
            </p>
          </div>

          {/* Summary Container */}
          <div className="w-full sm:w-[400px] h-full rounded-3xl flex flex-col items-center justify-start p-5">
            <h1 className="text-2xl mt-[10px] mr-[220px]">Summary</h1>
            <div className="flex flex-col items-start mt-[40px] w-full px-[20px]">
              {data.map((item, index) => {
                // Define colors for each category
                const colors = {
                  "Reaction": {
                    text: 'hsl(0, 100%, 67%)',
                    bg: 'hsl(0, 100%, 92%, 0.3)'
                  },
                  "Memory": {
                    text: 'hsl(39, 100%, 56%)',
                    bg: 'hsl(39, 100%, 86%, 0.3)'
                  },
                  "Verbal": {
                    text: 'hsl(166, 100%, 37%)',
                    bg: 'hsl(166, 100%, 92%, 0.3)'
                  },
                  "Visual": {
                    text: 'hsl(234, 85%, 45%)',
                    bg: 'hsl(234, 85%, 90%, 0.3)'
                  }
                };

                // Get the colors based on the category
                const { text, bg } = colors[item.category as Category] || { text: 'text-black', bg: 'bg-gray-200' }; // Fallback colors

                return (
                  <div 
                    key={index} 
                    className={`flex items-center mb-[20px] w-full p-[10px] rounded-lg`} 
                    style={{ backgroundColor: bg }} // Set the background color
                  >
                    <img 
                      src={assets[item.icon]} // Use the assets for the icon source
                      alt={item.category} 
                      className="w-[40px] h-[40px] mr-[10px] object-contain"
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
            <button className="w-full max-w-[320px] h-[60px] mt-[20px] bg-gray-600 rounded-3xl text-white py-2 px-4 hover:bg-blue-500 transition duration-300">
                Continue
            </button>
          </div>
        </div>
      </div>
    );
};

export default ResultSummary;
