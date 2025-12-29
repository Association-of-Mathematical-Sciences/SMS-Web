export const parseDate = (date) => {
  const s = String(date).trim();
  const m = s.match(/^(\d{2})\/(\d{2})\/(\d{2}|\d{4})$/);
  if (!m) return date;

  const mm = Number(m[1]);
  const dd = Number(m[2]);
  let yyyy = m[3];

  if (yyyy.length === 2) yyyy = `20${yyyy}`;

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  if (mm < 1 || mm > 12) return date;

  const mon = MONTHS[mm - 1];
  const dd2 = String(dd).padStart(2, "0");
  return `${mon} ${dd2} · ${yyyy}`;
};
