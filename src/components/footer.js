
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-wrap md:justify-between">
          <div className="mb-8 md:w-1/2 md:pr-4">
            <Link href="https://find.healthlinkbc.ca/ResourceView2.aspx?org=53965&agencynum=17668383" target="_blank" className="text-lg font-bold mb-2 block">Service Plus Pharmacy</Link>
            <p className="mb-2">1560-4380 No. 3 Rd, Richmond, BC V6X 3V7</p>
            <p>(604) 278-8830</p>
          </div>
          <div className="mb-8 md:w-1/2 md:pl-4">
            <Link href="https://find.healthlinkbc.ca/ResourceView2.aspx?org=53965&agencynum=17659033" target="_blank" className="text-lg font-bold mb-2 block">Park Pacific Pharmacy</Link>
            <p className="mb-2">3700 No. 3 Rd #2260, Richmond, BC V6X 3X2</p>
            <p>(604) 273-9812</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Paco Chan</p>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;