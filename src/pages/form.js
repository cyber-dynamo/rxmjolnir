import { useState } from 'react';
import { useRouter } from "next/router";
import CurrentDate from '../components/date';

export default function Form (){
    const router = useRouter();
    const { condition, assessment, recommend, monitor } = router.query;
    const [site, setSite] = useState(true);

    const handleClick =()=>{
      setSite(prevSite => !prevSite);
    }
    return (
        <div>
            <div className='formheader flex items-center justify-between'>
                <img 
                    src="/bchealth.png"
                    alt="BC Ministry of Health"
                    className='formlogo'
                    style={{ height: 'auto', maxHeight: '70px' }}
                />
                <h5>Minor Ailments and Contraception Service MACS Form</h5>
                <button 
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                    onClick={handleClick}
                >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {site ? "Service Plus Pharmacy" : "Park Pacific Pharmacy"}         
                 </span>
                    
                </button>
            </div>
            <table className="border-collapse border border-green-800 m-4">
                <tbody>
                    <tr>
                        <td className='formtitle'>Name of Patient:</td>
                        <td><input className='border border-gray-400 p-2 rounded-md' style={{ resize: 'none', height: '20px' }}/></td>
                        <td className='formtitle'>Patient's Phone No.:</td>
                        <td><input className='border border-gray-400 p-2 rounded-md' style={{ resize: 'none', height: '20px' }}/></td>
                        <td className='formtitle'>PHN:</td>
                        <td><input className='border border-gray-400 p-2 rounded-md' style={{ resize: 'none', height: '20px' }}/></td>
                        <td className='formtitle'>Informed Consent: YES</td>
                    </tr>
                    <tr className='formtitle'>
                        <td colSpan={7}>Minor Ailment of Concern/Contraception:</td>
                    </tr>
                    <tr className='formtitle'>
                        <td colSpan={7}>
                            <textarea
                                className='forminput border border-gray-400 p-2 rounded-md'
                                style={{ width: '100%',height: '30px' }}
                                defaultValue={condition}
                            />
                        </td>
                    </tr>
                    <tr className='flex items-center justify-between '>
                        <td> Patient Assessment</td>
                        <td> PharmaNET Checked: YES</td>
                        <td>Patient eligible: YES</td>
                    </tr>
                    <tr>
                        <td colSpan="7">
                            <textarea
                                className='forminput border border-gray-400 p-2 rounded-md'
                                style={{ resize: 'none', width: '100%', minHeight: '200px', height: 'auto' }}
                                defaultValue={assessment}
                            />
                        </td>
                    </tr>
                    <tr className='formtitle'>
                        <td colSpan={7}>RECOMMENDATIONS</td>
                    </tr>
                    <tr><td colSpan={7}>Prescription issued? (YES)/no</td></tr>
                    <tr><td colSpan={7}>Advised to seek medical attention from another healthcare professional? yes: (Family Doctor/Emergency) / (NO)</td></tr>
                    <tr><td colSpan={7}>Details of prescription and/or other recommendations, with rationale:</td></tr>
                    <tr>
                        <td colSpan="7">
                            <textarea
                                className='forminput border border-gray-400 p-2 rounded-md'
                                style={{ resize: 'none', width: '100%', minHeight: '200px', height: 'auto' }}
                                defaultValue={recommend}
                            />
                        </td>
                    </tr>
                    <tr className='formtitle'>
                        <td colSpan={7}>MONITORING and FOLLOW-UP PLAN</td>
                    </tr>
                    <tr>
                        <td colSpan="7">
                            <textarea
                                className='forminput border border-gray-400 p-2 rounded-md'
                                style={{ resize: 'none', width: '100%', minHeight: '100px', height: 'auto' }}
                                defaultValue={monitor}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>PROVIDERS NOTIFIED (if applicable)</td>
                        <td>Primary care Provider: <input className='border border-gray-400 p-2 rounded-md' /></td>
                        <td colSpan="2">Date and method notified: Fax/Phone:<input className='border border-gray-400 p-2 rounded-md' /><CurrentDate /></td>
                    </tr>
                    <tr className='formtitle'>
                        <td colSpan={7}>PHARMACY/PHARMACIST INFORMATION</td>
                    </tr>
                    <tr>
                        <td>Pharmacy Name: {site ? "Service Plus Pharmacy" : "Park Pacific Pharmacy"}</td>
                        <td>Pharmacy Address: {site ? "1560-4380 No. 3 Rd, Richmond, BC V6X 3V7" : "3700 No. 3 Rd #2260, Richmond, BC V6X 3X2"}</td>
                        <td colSpan="2">Pharmacy Phone Number: {site ? "(604) 278-8830" : "(604) 273-9812"}</td>
                    </tr>
                    <tr>
                        <td>Pharmacist: Paco Chan(lic:16308)</td>
                        <td>Pharmacist Signature:_______</td>
                        <td colSpan="2">Date of Signage:<CurrentDate /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
