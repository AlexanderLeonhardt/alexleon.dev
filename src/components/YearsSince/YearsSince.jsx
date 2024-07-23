'use client'

export default function YearsSince({date}) {
  const then = new Date(date), now = new Date();
  const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;
  const utc1 = Date.UTC(then.getFullYear(), then.getMonth(), then.getDate());
  const utc2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  
  return <span className='date'>{Math.floor((utc2 - utc1) / MS_PER_YEAR)}</span>
}