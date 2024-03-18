const formatTime = (value: Date): string =>
  value.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

export default formatTime;
