/* 파일이름(String)의 확장자 얻기 */
function getExtension(filename = '') {
  const extensionMatch = filename.match(/\.[^.]*$/);
  const extension = extensionMatch && extensionMatch[0];
  return extension;
}

module.exports = {
  getExtension,
};
