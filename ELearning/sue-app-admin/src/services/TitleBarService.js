import { Subject } from "rxjs"

const subject = new Subject();

export const TitleBarService = {
    setTitle: title => subject.next({title: title}),
    getTitle: () => subject.asObservable()
};