import moment from 'moment';

// On simule une api qui répond du json. 

export let EVENT_LIST_KEVIN = [
  {
    id: 1,
    start: new Date(),
    end:  new Date(moment().add(1, 'hour')),
    title: 'Meeting - 13 rue du pont'
  },
  {
    id: 2,
    start: new Date(moment().add(2, 'days')),
    end: new Date(moment().add(2, 'days')),
    title: 'Un rendez-vous'  
  },
  {
    id: 3,
    start: new Date('2019-07-26 08:00:00'),
    end: new Date('2019-07-26 15:00:00'),
    title: 'Rdv Kevin - Paris'  
  },
  {
    id: 4,
    start: new Date('2019-07-26 13:00:00'),
    end: new Date('2019-07-26 18:00:00'),
    title: 'Meeting - tour eiffel'  
  }
];

export let EVENT_LIST_NICOLAS = [
 {
    id: 1,
    start: new Date('2019-07-24 15:00:00'),
    end: new Date('2019-07-24 18:00:00'),
    title: 'Meeting - tour eiffel'  
  },
  {
    id: 2,
    start: new Date('2019-07-21 08:00:00'),
    end: new Date('2019-07-21 10:00:00'),
    title: 'Work - réunion'  
  },
  {
    id: 3,
    start: new Date('2019-07-28 08:00:00'),
    end: new Date('2019-07-28 10:00:00'),
    title: 'Work - réunion'  
  }
  
];