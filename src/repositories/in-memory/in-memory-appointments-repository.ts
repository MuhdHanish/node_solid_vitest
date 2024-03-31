import { areIntervalsOverlapping } from 'date-fns'
import { type Appointment } from '../../entities/appointment'
import { type IAppointmentsRepository } from '../appointments-repository'

export class InMemoryAppointmentsRepository implements IAppointmentsRepository {
  public appointments: Appointment[] = []

  async findOverLappingAppointment (starsAt: Date, endsAt: Date): Promise<Appointment | undefined> {
    const overLappingAppointment = this.appointments.find(appointment => {
      return areIntervalsOverlapping(
        { start: starsAt, end: endsAt },
        { start: appointment.startsAt, end: appointment.endsAt },
        { inclusive: true }
      )
    })
    return overLappingAppointment
  }

  async create (appointment: Appointment): Promise<void> {
    this.appointments.push(appointment)
  }
}
