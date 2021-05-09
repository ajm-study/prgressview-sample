const app = new Vue({
  el: '#app',
  data: {
    partList: [],
    nameList: [],
    testData: [],
  },
  methods: {
    createData: function() {
      // {name: '第1回', link: '', progress: 1}
      for(let i=0; i<48; i++) {
        let data = {
          name: '第'+(i+1)+'回',
          link: '',
          progress: 1,
        };
        
        this.testData.push(data);
      }
    },
  },
  mounted: function() {
    this.createData();
  }
});