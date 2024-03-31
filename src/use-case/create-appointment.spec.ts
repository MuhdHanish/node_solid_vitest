import { describe, expect, it } from 'vitest'
import { CreateAppointment } from './create-appointment'
import { Appointment } from '../entities/appointment'
import { getFutureDate } from '../tests/utils/get-future-date'

describe('Create Appointment', () => {
  it('should be able to create an appointment', async () => {
    const createAppointment = new CreateAppointment()

    const startsAt = getFutureDate('2024-08-10')
    const endsAt = getFutureDate('2024-08-11')

    await expect(createAppointment.execute({
      customer: 'Jhon Deo',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})
