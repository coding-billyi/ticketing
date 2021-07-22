import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@billyi-practice/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
