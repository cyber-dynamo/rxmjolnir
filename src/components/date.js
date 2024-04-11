import React from 'react';

function CurrentDate() {
  // Get the current date
  const currentDate = new Date();

  // Define an array of month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const month = monthNames[monthIndex];
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month}, ${year}`;

  return <div>{formattedDate}</div>;
}

export default CurrentDate;