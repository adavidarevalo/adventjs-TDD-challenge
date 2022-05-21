export default function learn(time: number, courses: number[]) {
  let result;


  courses.forEach((x, xi) => {
    if (!!result) return;
    courses.forEach((y, yi) => {
      if (x + y === time || x + y === time - 1) {
        result = [xi, yi];
      }
    });
  });
  if (!!result) return result.sort();

  courses.forEach((x, xi) => {
    if (!!result) return;
    courses.forEach((y, yi) => {
      if (x + y < time) {
        result = [xi, yi];
      }
    });
  });

  if (!!result) return result.sort();

  return null;
}
