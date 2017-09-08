var Rx = require('rxjs/Rx')
var sl = require('sleep');

var subject = new Rx.Subject();

subject.subscribe({
  next: function(v){

    console.log('observerA: ' + v)
    sl.sleep(3)
  }

});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(1);
subject.next(2);

// --------------OUTPUT--------
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
