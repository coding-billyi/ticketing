import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@billyi-practice/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
