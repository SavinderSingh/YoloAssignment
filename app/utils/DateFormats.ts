export const getSalutation = () => {
  let salutation = 'Good Morning!';
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    salutation = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    salutation = 'Good Afternoon';
  } else {
    salutation = 'Good Evening';
  }
  return salutation;
};
