var term = require("terminal-kit").terminal;
const { writeFile } = require("fs/promises");

term.black.bgGreen("Hello User\n");
term.black.bgGreen("Please enter your username:\n");

const write = async(input) => {
    try {
        let user = {
            username: input
        }

        let data = JSON.stringify(user);
        console.log(data);
        await writeFile('src/database/username.JSON', data);
    } catch (error) {
        console.log(error);
    }
}

term.inputField((error, input) => {
  term.red(`\nYour name is: ${input}\n`);
  write(input).then(() => {
      process.exit();
  });
});