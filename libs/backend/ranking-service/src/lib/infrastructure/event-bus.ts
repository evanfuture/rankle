import { EventBus } from '../domain/interfaces';
import { EventEmitter } from 'events';

export class InMemoryEventBus implements EventBus {
  constructor(private emitter = new EventEmitter()) {}

  async publish(event: { type: string; payload: unknown }): Promise<void> {
    this.emitter.emit(event.type, event.payload);
  }

  on(event: string, listener: (payload: unknown) => void) {
    this.emitter.on(event, listener);
  }
}
