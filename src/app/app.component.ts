import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {decrement, increment} from "./store/counter-slice";
import {injectAppDispatch, injectAppSelector, RootState} from "./store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>
      <button (click)="increment()">+1</button>
      <button (click)="asyncIncrement()">async +1</button>
      Count: {{$count()}}
      <button (click)="decrement()">-1</button>
    </h1>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-redux-example';
  $count = injectAppSelector((state) => {
    return state.counter.value
  });

  dispatch = injectAppDispatch();

  increment = () => {
    this.dispatch(increment());
  }

  asyncIncrement = async () => {
    await this.dispatch(async (dispatch, state) => {
      dispatch(increment());
      await Promise.resolve();
      dispatch(increment());
    });
    console.log('done');
  }

  decrement =  () => {
    this.dispatch(decrement());
  }
}
