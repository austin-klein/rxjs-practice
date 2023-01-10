import { Observable } from 'rxjs';

const observable = new Observable<number>((subscriber) => {
  subscriber.next(10);
});

const observer = {
  next: (value: number) => {
    console.log(`Observer Value ${value}`);
  },
  error: (err: Error) => {
    console.log(`Observer Error ${err}`);
  },
  complete: () => {
    console.log('Observer Complete');
  },
};

observable.subscribe(observer);
