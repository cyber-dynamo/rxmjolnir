import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";
import Head from "next/head";
import conditions from '../../components/data/conditions';
import meds from '../../components/data/drugs';
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const ids = conditions.map(condition => condition.id.toString());

  const paths = ids.map(id => ({
    params: { id }
  }));

  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const condition = conditions.find(condition => condition.id === parseInt(id));

  const drugs = meds.filter(drug => drug.class === condition.condition);

  return {
    props: {
      condition, drugs
    }
  };
}

const Details = ({ condition, drugs }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  const router = useRouter();
  const handleLinkClick = () => {
    window.open(
      "/form?condition=" +
        encodeURIComponent(condition.condition) +
        "&assessment=" +
        encodeURIComponent(condition.assessment) +
        "&recommend=" +
        encodeURIComponent(condition.recommend) +
        "&monitor=" +
        encodeURIComponent(condition.monitor),
      "_blank"
    );
  };

  return (
    <div>
      <Head>
        <title>Rx Hero | Condition</title>
        <meta name="keyword" content='medication review' />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div key={condition.id} className="details mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {condition.condition}
            <CopyToClipboard text={`${condition.condition}`} onCopy={handleCopy}>
              <button className="relative inline-flex items-center justify-center ml-3 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {copied ? 'Copied!' : 'Copy'}
              </span>               
              </button>
            </CopyToClipboard>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={handleLinkClick}>
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Form
           </span>
            </button>
          </h1>

          <h2 className="text-xl font-bold">Assessment</h2>
          <p className="mb-4">
            {condition.assessment}
            <CopyToClipboard text={`${condition.assessment}`} onCopy={handleCopy}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {copied ? 'Copied!' : 'Copy'}
              </span>              
              </button>
            </CopyToClipboard>
          </p>
          <h2 className="text-xl font-bold">Recommendation</h2>
          <p className="mb-4">
            {condition.recommend}
            <CopyToClipboard text={`${condition.recommend}`} onCopy={handleCopy}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {copied ? 'Copied!' : 'Copy'}
              </span>
              </span>
              </button>
            </CopyToClipboard>
          </p>
          <h2 className="text-xl font-bold">Monitoring plan</h2>
          <p className="mb-4">
            {condition.monitor}
            <CopyToClipboard text={`${condition.monitor}`} onCopy={handleCopy}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {copied ? 'Copied!' : 'Copy'}
              </span>
              </button>
            </CopyToClipboard>
          </p>
          <h2 className="text-xl font-bold">Resources</h2>
          <p>{condition.resources}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {drugs.map((drug) => (
            <div key={drug.id} className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-bold mb-2">{drug.drug}</h2>
              <p className="text-sm mb-2">{drug.sig}</p>
              <p className="text-sm mb-2">{drug.ae}</p>
              <CopyToClipboard text={`${drug.drug}`} onCopy={handleCopy}>
                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  {copied ? 'Copied!' : 'Copy Drug'}
                </button>
              </CopyToClipboard>
              <CopyToClipboard text={`${drug.sig}`} onCopy={handleCopy}>
                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  {copied ? 'Copied!' : 'Copy SIG'}
                </button>
              </CopyToClipboard>
              <CopyToClipboard text={`${drug.ae}`} onCopy={handleCopy}>
                <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  {copied ? 'Copied!' : 'Copy AE'}
                </button>
              </CopyToClipboard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
