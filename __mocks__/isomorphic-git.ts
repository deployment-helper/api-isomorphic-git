class MockIsmGit {
  public static clone() {
    return Promise.resolve(true);
  }
  public static add() {
    return Promise.resolve(true);
  }
  public static commit() {
    return Promise.resolve(true);
  }
  public static push() {
    return Promise.resolve(true);
  }
}

export default MockIsmGit;
