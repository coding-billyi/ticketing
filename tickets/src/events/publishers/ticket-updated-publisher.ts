import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@billyi-practice/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
