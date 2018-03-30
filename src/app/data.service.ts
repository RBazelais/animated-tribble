import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
	// set the initial goal through goals as a BehaviorSubject, and then define a goal property as an observable
	private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
	// real goals: ['Learn to snowboard', 'Visit Japan', 'Win an IGF Award']
	goal = this.goals.asObservable();

	constructor() { }

	//updates the goals property
	changeGoal(goal) {
		this.goals.next(goal)
	}

}