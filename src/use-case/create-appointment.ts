import { Appointment } from '../entities/appointment'
import { type IAppointmentsRepository } from '../repositories/appointments-repository'

interface ICreateAppointmentRequest {
  customer: string
  startsAt: Date
  endsAt: Date
}

type TCreateAppointmentResponse = Appointment

export class CreateAppointment {
  constructor (
    private readonly appointmentsRepository: IAppointmentsRepository
  ) { }

  async execute (requestData: ICreateAppointmentRequest): Promise<TCreateAppointmentResponse> {
    const overLappingAppointment = await this.appointmentsRepository.findOverLappingAppointment(requestData.startsAt, requestData.endsAt)
    if (overLappingAppointment !== undefined) {
      throw new Error('Another appointment overlaps this appointmet dates')
    }
    const appointment = new Appointment(requestData)
    await this.appointmentsRepository.create(appointment)
    return appointment
  }
}
