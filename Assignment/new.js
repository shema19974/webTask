new Vue({
  // By specifying an HTML id in this el, an instance of Vue.js is imported in the DOM of that id
  el: '#app',
  // data is an attribute (value) of the defined Vue.js instance
  data: {
    name: 'ordinary Joe',
    course: 'Web Engineer Course',
    acceptancePeriod: 'January 2019',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Noro Hiroyoshi', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
      { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' },
      { id: 3, name: 'Saito Kazuki', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' }
    ]
  },
  // In methods, describe the method you want to use for the instance of Vue.js
  methods: {
    addStudent: function() {     
        let element = this.students[this.students.length - 1];
        let auto = element.id + 1;
        return this.students.push({ id: auto, name: this.name, course: this.course, period: this.period }) 
    }
  }
})