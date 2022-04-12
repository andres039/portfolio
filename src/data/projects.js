import track from './track.png'

export  const projects = [
  {
    title: 'Upcycle Montreal',
    description: 'A web app that allows Montrealers to extend the life of discarded furniture by displaying their location on an interactive map.',
    stack: ['PostgreSQL' , 'Express' , 'React' , 'Node'],
    type: 'Team work',
    image: 'https://github.com/andres039/Upcycle-Cradle-Montreal/raw/master/frontend/public/images/demo.gif?raw=true',
    code: 'https://github.com/andres039/Upcycle-Cradle-Montreal'
  },
  {
    title: 'Scheduler-dashboard',
    description: 'A web app that allows students to set up apointments with Mentors.',
    stack:  ['React', 'Storybook', 'Cypress' ],
    type: 'Solo',
    image: 'https://raw.githubusercontent.com/andres039/scheduler/main/docs/Main.png',
    code: 'https://github.com/andres039/scheduler'
  },
  {
    title: 'Scheduler-dashboard',
    description: 'An URL shortener including the logic for login using bcrypt to keep passwords safe.',
    stack:  ['Node', 'Express', 'EJS', 'Bcrypt' ],
    type: 'Solo',
    image: 'https://raw.githubusercontent.com/andres039/tinyapp/master/docs/urls-page.png', 
    code: 'https://github.com/andres039/tinyapp',
  },
  {
    title: 'Track',
    description: 'Track is an app that allows musicians to practice scales daily keeping a record of the speed achieved every day at the end of practice.',
    stack:  ['Node', 'Express', 'Prisma', 'React', 'Bootstrap', 'Bulma' ],
    type: 'Team work',
    image: (track), 
    code: 'https://github.com/andres039/Track',
  },
  
]
