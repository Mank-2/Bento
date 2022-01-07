// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Mank.',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Morning',
  greetingAfternoon: 'Afternoon',
  greetingEvening: 'Evening',
  greetingNight: '...',

  // Weather
  weatherKey: '9625537d49fbabadd22c92cdcf8d2a36',
  weatherIcons: 'White', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '14.851720',
  defaultLongitude: '120.278420',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
    {
      id: '3',
      name: 'Messenger',
      icon: 'message-circle',
      link: 'https://messenger.com',
    },
    {
      id: '4',
      name: 'Mangadex',
      icon: 'book-open',
      link: 'https://mangadex.org',
    },
    {
      id: '5',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'link',

  // Links
  lists: {
    firstList: [
      {
        name: 'Kemono',
        link: 'https://kemono.party/',
      },
      {
        name: 'Reddit',
        link: 'https://reddit.com/',
      },
      {
        name: 'Pixiv',
        link: 'https://pixiv.net',
      },
      {
        name: '/g/',
        link: 'https://4chan.org/g/',
      },
    ],
    // Need the associative array to be within a regular array (you can figure out why)
    secondList: [
      { 
        image: './assets/background.jpg' 
      }
    ]
  },
};
