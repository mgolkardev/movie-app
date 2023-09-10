export const formatDuration = (time: string) => {
  const times = time.split(":").map(Number);
  const hours = times[0];
  const minutes = times[1];

  let result = "";

  if (hours > 0) {
    result += `${hours} ساعت`;
  }

  if (minutes > 0) {
    if (hours > 0) {
      result += ` و `;
    }

    result += `${minutes} دقیقه`;
  }

  return result;
};
