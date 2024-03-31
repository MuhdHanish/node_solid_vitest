import { type Appointment } from '../entities/appointment'

export interface IAppointmentsRepository {
  findOverLappingAppointment: (starsAt: Date, endsAt: Date) => Promise<Appointment | undefined>
  create: (appointment: Appointment) => Promise<void>
}
