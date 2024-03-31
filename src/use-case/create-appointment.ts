import { Appointment } from '../entities/appointment'

interface ICreateAppointmentRequest {
  customer: string
  startsAt: Date
  endsAt: Date
}

type TCreateAppointmentResponse = Appointment

export class CreateAppointment {
  async execute (requestData: ICreateAppointmentRequest): Promise<TCreateAppointmentResponse> {
    const appointment = new Appointment(requestData)
    return appointment
  }
}
