function isError(error: any) {
  if (error instanceof Error) {
    return true;
  }
  return false;
}

export { isError };
