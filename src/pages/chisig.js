import { useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
  const sigs = require('../components/data/chisig').default;
  return {
    props: { sigs }
  };
};

export default function Chisig({ sigs }) {
  const [nameInput, setNameInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Router = useRouter();

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (nameInput.toLowerCase() === 'nemesis') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect name. Access denied.');
      Router.push('/');
    }
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  const [expandedSig, setExpandedSig] = useState(null);

  const toggleExpand = (id) => {
    setExpandedSig(id === expandedSig ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Rx Hero|ChiSig</title>
        <meta name="keyword" content='ChiSig'/>
      </Head>
      <div className="flex-grow">
        {isAuthenticated ? (
          <div className="container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {sigs.map((sig) => {
                return (
                  <div key={sig.id}>
                    <div className="border border-gray-300 rounded-md">
                      <div className="p-4">
                        <div className="flex justify-between items-center">
                          <h2 className="text-lg font-semibold">{sig.input}</h2>
                          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" onClick={() => toggleExpand(sig.id)}>
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          {expandedSig === sig.id ? '-' : '+'}
                          </span>
                          </button>
                        </div>
                        {expandedSig === sig.id && (
                          <div className="border-t border-gray-300 mt-2 pt-2">
                            <div>
                              <h5>{sig.input}</h5>
                              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick={() => handleCopy(sig.input)}>
                                
                              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              {copied ? 'Copied!' : 'Copy'}
                              </span>
                              </button>
                            </div>
                            <p className="mt-2">{`${sig.sig}`}</p>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800" onClick={() => handleCopy(sig.sig)}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            {copied ? 'Copied!' : 'Copy'}
                            </span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleNameSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <label htmlFor="nameInput" className="block text-gray-700 text-sm font-bold mb-2">Unlock Codex:</label>
              <input
                type="password"
                id="nameInput"
                className="form-input border border-gray-300 rounded-md px-4 py-2 mt-2 w-full focus:outline-none focus:ring focus:border-blue-300 bg-white text-black"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
              <button className="relative mt-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
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
