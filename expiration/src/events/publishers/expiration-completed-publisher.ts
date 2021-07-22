import { Publisher, ExpirationCompletedEvent, Subjects } from "@billyi-practice/common";

export class ExpirationCompletedPublisher extends Publisher<ExpirationCompletedEvent> {
  readonly subject = Subjects.ExpirationCompleted
}