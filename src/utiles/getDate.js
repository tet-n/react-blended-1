import { formatDistanceToNow, format } from 'date-fns';

export function getDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatDate(date) {
  return format(new Date(date), 'yyyy-MM-dd, h:mm a');
}
