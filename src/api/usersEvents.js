import moment from 'moment';

// On simule une api qui répond du json. 

export let EVENT_LIST_KEVIN = [
  {
    start: new Date(),
    end:  new Date(moment().add(1, 'hour')),
    title: 'Meeting - 13 rue du pont'
  },
  {
    start: new Date(moment().add(2, 'days')),
    end: new Date(moment().add(2, 'days')),
    title: 'Un rendez-vous'  
  },
  {
    start: new Date('2019-07-26 08:00:00'),
    end: new Date('2019-07-26 15:00:00'),
    title: 'Rdv Kevin - Paris'  
  },
  {
    start: new Date('2019-07-26 13:00:00'),
    end: new Date('2019-07-26 18:00:00'),
    title: 'Meeting - tour eiffel'  
  }
];

export let EVENT_LIST_NICOLAS = [
 {
    start: new Date('2019-07-24 15:00:00'),
    end: new Date('2019-07-24 18:00:00'),
    title: 'Meeting - tour eiffel'  
  },
  {
    start: new Date('2019-07-21 08:00:00'),
    end: new Date('2019-07-21 10:00:00'),
    title: 'Work - réunion'  
  },
  {
    start: new Date('2019-07-28 08:00:00'),
    end: new Date('2019-07-28 10:00:00'),
    title: 'Work - réunion'  
  }
  
];