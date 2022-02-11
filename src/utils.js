const makeFileName = (adress) => {
  const regWithoutProtocol = /^https:\/\/|^http:\/\//g;
  const regFileName = /[^0-9a-zA-Z]/g;
  const withoutProtocolAdress = adress.replace(regWithoutProtocol, '');
  const fileName = withoutProtocolAdress.replace(regFileName, '-');
  return fileName;
};

export default makeFileName;
