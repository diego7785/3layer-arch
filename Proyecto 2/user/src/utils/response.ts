function buildResponse(status: number, message: any) {
  return {
    status,
    message,
  };
}

export { buildResponse };
