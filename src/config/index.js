function EnvConfig() {
  function getKeyPrivate() {
    return process.env.REACT_APP_KEY_PRIVATE || "";
  }

  function getKeyPublic() {
    return process.env.REACT_APP_KEY_PUBLIC || "";
  }
  return { getKeyPrivate, getKeyPublic };
}

export { EnvConfig };
