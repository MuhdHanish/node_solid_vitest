import { describe, expect, it } from 'vitest'
import { Appointment } from '../entities/appointment'
import { CreateAppointment } from './create-appointment'
import { getFutureDate } from '../tests/utils/get-future-date'
import { InMemoryAppointmentsRepository } from '../repositories/in-memory/in-memory-appointments-repository'

describe('Create Appointment', () => {
  it('should be able to create an appointment', async () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    const startsAt = getFutureDate('2024-10-01')
    const endsAt = getFutureDate('2024-10-02')

    await expect(createAppointment.execute({
      customer: 'Jhon Deo',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })

  it('should not be able to create an appointment with overlapping dates', async () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    const startsAt = getFutureDate('2024-10-01')
    const endsAt = getFutureDate('2024-10-30')

    await createAppointment.execute({
      customer: 'Jhon Deo',
      startsAt,
      endsAt
    })

    await expect(createAppointment.execute({
      customer: 'Jhon Deo',
      startsAt: getFutureDate('2024-10-01'),
      endsAt: getFutureDate('2024-10-30')
    })).rejects.toBeInstanceOf(Error)
  })
})
