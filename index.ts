import { filter, map, Observable, of, switchMap } from 'rxjs';

// filter operator
const observable = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(6);
  subscriber.next(7);
  subscriber.next(10);
  // filter and only show odd numbers
}).pipe(filter((n) => n % 2 === 1));

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
});

// map operator
const observable2 = new Observable<{ value: number }>((subscriber) => {
  subscriber.next({ value: 4 });
  subscriber.next({ value: 5 });
  subscriber.next({ value: 8 });
}).pipe(
  // change data to grab property value
  map((obj) => {
    return obj.value;
  })
);

observable2.subscribe({
  next: (value) => {
    console.log(value);
  },
});

// "of" creates observable of value passed in
const chars$ = of('a', 'b', 'c');
console.log(chars$);

const userId$ = of({ id: Math.random() });

const fetchUserData = (userId: number) => {
  return of(`${userId} data`);
};

// switch map wil change to different observable
// once have userId then can fetch user data
const data = userId$.pipe(
  switchMap((user) => {
    return fetchUserData(user.id);
  })
);
data.subscribe({
  next: (value) => {
    console.log(value);
  },
});
