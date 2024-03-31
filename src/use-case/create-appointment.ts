import { Appointment } from '../entities/appointment'

interface CreateAppointmentRequest {
  customer: string
  startsAt: Date
  endsAt: Date
}

type CreateAppointmentResponse = Appointment

export class CreateAppointment {
  async execute (requestData: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const appointment = new Appointment(requestData)
    return appointment
  }
}
