import moment from 'moment';

const Helpers = {
  getDates: () => {
    let dates = ['Today', 'Tomorrow'];

    for (let i = 3; i <= 10; i++) {
      dates.push(moment().add(i, 'days').format('DD/MM'));
    }

    return dates;
  },
  findElementById: (data, id) => data.find((x) => x.id === id),
  getIsDailyTasksDone: (data) => !data.some((el) => !el.done)
};

export default Helpers;
