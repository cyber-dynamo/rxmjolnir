import { useState } from 'react';
import CurrentDate from '../components/date';

export default function Form() {
  const [chill, setChill] = useState(false);

  const Click = () => {
    setChill(prevChill => !prevChill);
  }

  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full sm:w-auto flex-grow">
        <div className='formheader flex items-center'>
          <h3 className="text-xl font-bold mr-auto">Adaptation Form</h3>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            onClick={Click}>
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {chill ? "Service Plus Pharmacy" : "Park Pacific Pharmacy"}
              </span>            
          </button>
        </div>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-1">Patient information</td>
              <td className="border px-4 py-1">Pharmacist information</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Name: <input className="border border-gray-400 px-4 py-2 w-full" style={{ resize: 'none', height: '20px' }}/></td>
              <td className="border px-4 py-1">Name: <input className="border border-gray-400 px-4 py-2 w-full" style={{ resize: 'none', height: '20px' }} defaultValue={"Paco Chan"} /></td>
            </tr>
            <tr>
              <td className="border px-4 py-1">PHN: <input className="border border-gray-400 px-4 py-2 w-full" style={{ resize: 'none', height: '20px' }}/></td>
              <td className="border px-4 py-1">Pharmacy: {chill ? "Service Plus Pharmacy" : "Park Pacific Pharmacy"}</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Prescribing Details: <textarea className="border border-gray-400 px-4 py-2 w-full" style={{ resize: 'none', height: '20px' }}></textarea></td>
              <td className="border px-4 py-1">Phone: {chill ? "604-278-8830" : "604-273-9812"}</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Adaptation Details: <textarea className="border border-gray-400 px-4 py-2 w-full" style={{ resize: 'none', height: '20px' }}></textarea></td>
              <td className="border px-4 py-1">Fax: {chill ? "604-279-8961" : "604-270-2228"}</td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Date of Adaptation: <CurrentDate /></td>
              <td className="border px-4 py-1">Signature: {/* Icon component here */}</td>
            </tr>
            <tr>
              <td className="border px-4 py-1" colSpan={2}>Rationale for Adaptation (Including Instructions for Patient and Follow-Up Plan)</td>
            </tr>
            <tr>
              <td className="border px-4 py-1" colSpan={2}>
                <textarea className="border border-gray-400 px-4 py-2 w-full" defaultValue={"Rationale: PharmaNet record indicates the patient has been stable on the same dosage. The patient confirms that the condition is monitored regularly. The patient confirms that follow-up with a physician is coming up in the near future. The most recent original prescription was at least within 3 months ago and hence is still valid. Adaptation is done for continuity of care"} style={{ resize: 'none', height: '120px' }}></textarea>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-1" colSpan={2}>
                <textarea className="border border-gray-400 px-4 py-2 w-full" defaultValue={"Instructions to Patient: Use the medication as directed. Continue to monitor the condition regularly and visit the doctor as soon as possible. "} style={{ resize: 'none' }}></textarea>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-1" colSpan={2}>
                <textarea className="border border-gray-400 px-4 py-2 w-full" defaultValue={"Follow-up Plan: Return to your physician for follow-up as scheduled."} style={{ resize: 'none', height: '30px' }}></textarea>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-1" colSpan={2}>Informed Consent</td>
            </tr>
            <tr>
              <td className="border px-4 py-1" colSpan={2}>The patient and/or their representative was provided sufficient information, including risks and benefits associated with the Adaptation and voluntarily provided their consent.</td>
            </tr>
            <tr>
              <td className="border px-4 py-1" colSpan={2}>Notification Information (if applicable) : </td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Date of Notification: <CurrentDate /></td>
              <td className="border px-4 py-1">Name of Practitioner notified: <input className="border border-gray-400 px-4 py-2 w-full" style={{ resize: 'none', height: '20px' }}/></td>
            </tr>
            <tr>
              <td className="border px-4 py-1">Method of Notification: Fax: <input className="border border-gray-400 px-4 py-2 w-full" style={{ resize: 'none', height: '20px' }}/></td>
              <td className="border px-4 py-1">Phone: <input className="border border-gray-400 px-4 py-2 w-full" style={{ resize: 'none', height: '20px' }}/></td>
            </tr>
          </tbody>
        </table>
        <div>
          <p className="py-4">The information contained in this fax communication is confidential and is intended only for the use of the recipient named above. </p>
        </div>
      </div>
    </div>
  );
}
