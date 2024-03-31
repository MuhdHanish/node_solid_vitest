export interface IAppointmentProps {
  customer: string
  startsAt: Date
  endsAt: Date
}

export class Appointment {
  private readonly props: IAppointmentProps

  get customer (): string {
    return this.props.customer
  }

  get startsAt (): Date {
    return this.props.startsAt
  }

  get endsAt (): Date {
    return this.props.endsAt
  }

  constructor (props: IAppointmentProps) {
    const { startsAt, endsAt } = props

    if (startsAt <= new Date()) {
      throw new Error('startsAt must be greater than now')
    }

    if (endsAt <= startsAt) {
      throw new Error('endsAt must be less than startsAt')
    }

    this.props = props
  }
}
