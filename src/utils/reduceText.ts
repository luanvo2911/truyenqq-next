const reduceText = (text: string, limit: number) => {
  if (!text) return "";
  return text.length > limit
    ? text.slice(0, limit) + "..."
    : text.slice(0, limit);
};

export default reduceText;
