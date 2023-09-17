function getRandomSwedishCityLocation() {
  const cities = [
    { name: 'Stockholm', latitude: 59.3293, longitude: 18.0686 },
    { name: 'Gothenburg', latitude: 57.7089, longitude: 11.9746 },
    { name: 'Malmö', latitude: 55.605, longitude: 13.0038 },
    { name: 'Uppsala', latitude: 59.8588, longitude: 17.6389 },
    { name: 'Västerås', latitude: 59.6091, longitude: 16.5448 },
    { name: 'Örebro', latitude: 59.2764, longitude: 15.2064 },
    { name: 'Linköping', latitude: 58.4108, longitude: 15.6214 },
    { name: 'Helsingborg', latitude: 56.0465, longitude: 12.6944 },
    { name: 'Jönköping', latitude: 57.7815, longitude: 14.1562 },
    { name: 'Norrköping', latitude: 58.5877, longitude: 16.192 },
  ];
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

function getRandomSwedishTechCompany() {
  const companies = [
    'Spotify',
    'Klarna',
    'Ericsson',
    'King',
    'Mojang',
    'iZettle',
    'Autoliv',
    'Truecaller',
    'Volvo Cars',
    'Tobii',
    'Fingerprint Cards',
    'ABB',
    'SEB',
    'H&M',
    'Saab',
    'EQT',
    'Elekta',
    'Telia',
    'Sinch',
    'Assa Abloy',
  ];
  const randomIndex = Math.floor(Math.random() * companies.length);
  return companies[randomIndex];
}

function getRandomString() {
  const strings = ['Hybrid', 'Remote', 'On site'];
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

function getRandomTimestamp() {
  const today = new Date();
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(today.getMonth() - 3);

  const randomTime =
    threeMonthsAgo.getTime() +
    Math.random() * (today.getTime() - threeMonthsAgo.getTime());

  return randomTime;
}

function getRandomITJob() {
  const jobs = [
    'Help Desk Technician',
    'Network Administrator',
    'Software Developer',
    'Database Administrator',
    'Web Developer',
    'Systems Administrator',
    'IT Support Specialist',
    'Computer Systems Analyst',
    'Information Security Analyst',
    'Technical Writer',
    'IT Project Manager',
    'Business Analyst',
    'Data Analyst',
    'DevOps Engineer',
    'Cloud Architect',
    'Artificial Intelligence/Machine Learning Engineer',
    'UI/UX Designer',
    'Mobile Application Developer',
    'Game Developer',
    'Full-Stack Developer',
  ];
  const randomIndex = Math.floor(Math.random() * jobs.length);
  return jobs[randomIndex];
}

function getRandomTechCompanyDescription() {
  const descriptions = [
    'A tech company focused on building innovative software solutions for businesses of all sizes.',
    'A leading provider of cloud computing services and infrastructure, helping companies of all sizes to grow and scale.',
    'A cutting-edge technology company that is revolutionizing the way people live, work, and communicate.',
    'An innovative software company that is changing the way people interact with technology.',
    'A company that specializes in developing AI and machine learning solutions for businesses in a variety of industries.',
    'A leading provider of cybersecurity solutions that help protect companies from the latest threats.',
    'A company that is redefining the way people shop and buy online, using the latest in e-commerce technology.',
    'A provider of enterprise software solutions that help businesses improve their operations and increase efficiency.',
    'A technology company that is leading the way in the development of virtual and augmented reality technology.',
    'A company that specializes in creating mobile apps and software solutions for consumers and businesses.',
  ];

  const randomIndex = Math.floor(Math.random() * descriptions.length);
  const description = descriptions[randomIndex];

  return description;
}

function getRandomPaymentStatus() {
  const paymentStatuses = ['Paid', 'Unpaid'];
  const randomIndex = Math.floor(Math.random() * paymentStatuses.length);
  return paymentStatuses[randomIndex];
}

const generateMockJobs = (id, city = getRandomSwedishCityLocation()) => ({
  id: id,
  jobName: getRandomITJob(),
  description: getRandomTechCompanyDescription(),
  location: {
    lat: city.latitude,
    lng: city.longitude,
  },
  salary: getRandomPaymentStatus(),
  jobType: getRandomString(),
  city: city.name,
  companyName: getRandomSwedishTechCompany(),
  date: getRandomTimestamp(),
});

export const jobs = Array(100)
  .fill(null)
  .map((_, i) => generateMockJobs(i));
