import {
  Publisher,
  TicketCreatedEvent,
  Subjects,
} from "@billyi-practice/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
