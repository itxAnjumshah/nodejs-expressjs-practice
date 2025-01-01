const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);

fs.writeFileSync(
  "./text.txt",
  "hello anjum shah how  are  you this is  my  file  "
);
// ya  file  handling  ka  le a kam ate  ha  or  is  sa  file  banti ha
