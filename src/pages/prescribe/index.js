import Head from "next/head";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import conditionsData from '../../components/data/conditions';

export default function Prescribe() {
  const [answerInput, setAnswerInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Router = useRouter();

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    if (answerInput.toLowerCase() === 'nemesis') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect answer. Access denied.');
      Router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Rx Hero|Prescribe</title>
        <meta name="keyword" content='BC Minor ailments prescribing'/>
      </Head>
      <div className="flex-grow">
        {isAuthenticated ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditionsData.map((condition) => (
                <div key={condition.id} className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-bold mb-2">{condition.condition}</h2>
                  <button 
                    onClick={() => window.open('/prescribe/' + condition.id, '_blank')} 
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                  >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Details 
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button onClick={() => {
                const newWindow = window.open("https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/pharmacare/pharmacare-publications/pharmacare-policy-manual-2012/pharmacyfees-subsidies-providerpayment/minor-ailments-and-contraception-service", "_blank");
                newWindow.focus();
              }} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Cheat Sheet
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleAnswerSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="answerInput" className="block text-gray-700 text-sm font-bold mb-2">Unlock Codex:</label>
                <input
                  type="password"
                  id="answerInput"
                  value={answerInput}
                  onChange={(e) => setAnswerInput(e.target.value)}
                  className="form-input border border-gray-300 rounded-md px-4 py-2 mt-2 w-full focus:outline-none focus:ring focus:border-blue-300 bg-white text-black"
                  />
              </div>
              <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
               Proceed      
              </span>
              </button> 
            </form>
          </div>
        )}
      </div>

    </div>
  );
}