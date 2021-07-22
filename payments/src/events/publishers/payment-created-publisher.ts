import {
  Publisher,
  PaymentCreatedEvent,
  Subjects,
} from "@billyi-practice/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
