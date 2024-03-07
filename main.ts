import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter Your Age:" ,
}])


console.log(chalk.green("INSHA ALLAH, in " + (60 - answer.age ) + " years you will be 60 years old."))