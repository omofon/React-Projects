function calculateRuntime(duration) {
  return `${Math.trunc(duration / 60)}h ${duration % 60}m`;
}

export default calculateRuntime;
