export interface Booking {
  id: string;
  time: string;
  guestName: string;
  roomType: string;
  nights: number;
  ratePerNight: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  channel: 'Direct' | 'Booking.com' | 'Expedia' | 'Airbnb' | 'Travel Agent';
}

