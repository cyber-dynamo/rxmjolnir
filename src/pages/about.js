import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap items-start">
        <div className="w-full md:w-1/2">
          <img 
            src="paco.jpg" 
            alt="About" 
            className="block w-full rounded-lg mb-4 md:mb-0 md:mr-4 md:rounded-none md:rounded-l-lg" 
            style={{ maxHeight: '80vh', width: 'auto' }} 
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <div className="w-16 h-1 bg-gray-900 mb-4 md:hidden"></div> {/* Line for small screens */}
          <p className="text-lg">
          Graduated from UBC in 2018, Paco dedicates 7 days a week as a pharmacy manager in Park Pacific Pharmacy and an assistant manager in Service Plus Pharmacy.
          <br/>
          <br/>


          On duty, he oversees dispensing, reviews prescriptions and performs medication reconsiliation and/or medication reviews. In addition, he develops care plans and perform immunizations.

          <br/>
          <br/>
          His childhood dream to become a software developer keeps him advancing above and beyond. Off duty, Paco enjoys researching on interesting computer science knowledge such as basic computer algorithms, databases, front end frameworks such as react, redux state managing toolkits. It is not unusual to see him challenging leetcode questions and building webpages.

          <br/>
          <br/>
          Paco is a strong believer of expanding the scope of pharmacy practice in British Columbia to synchronize the advance with the rest of the Canadian provinces. Medication reviews, immunizations and adaptations were good starts but in the summer of 2023, the long awaited pharmacist prescribing finally comes into action.

<br/>
          <br/>
          Paco seeks to incorporate his knowledge in computer science into pharmaceutical practice to improve patient outcomes, share knowledge and provide guidance to his fellow pharmacists. Cheers!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;