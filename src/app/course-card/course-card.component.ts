import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from "@angular/core";
import { CourseImageComponent } from "../course-image/course-image.component";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input({
    required: true,
  })
  course: Course;

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;

  onCourseView() {
    console.log("Card component la button clicked");
    this.courseEmitter.emit(this.course);
  }
  ngAfterViewInit(): void {}
  ngAfterContentInit(): void {
    console.log(this.images);
  }
}
