import { describe, expect, it } from 'vitest'
import { CreateAppointment } from './create-appointment'
import { Appointment } from '../entities/appointment'

describe('Create Appointment', () => {
  it('should be able to create an appointment', async () => {
    const createAppointment = new CreateAppointment()

    const startsAt = new Date()
    const endsAt = new Date()

    startsAt.setDate(startsAt.getDate() + 1)
    endsAt.setDate(endsAt.getDate() + 2)

    await expect(createAppointment.execute({
      customer: 'Jhon Deo',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })
})
