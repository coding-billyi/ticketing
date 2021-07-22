import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@billyi-practice/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
