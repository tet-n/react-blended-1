import { formatDistanceToNow } from 'date-fns';

export function getDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
