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
    this.props = props
  }
}
