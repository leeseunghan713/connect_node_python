const { exec } = require('child_process');

const command = 'test.py'

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`실행 중 에러가 발생했습니다: ${error}`);
    return;
  }
  console.log(`결과: ${stdout}`);
});
