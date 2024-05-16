import inquirer from "inquirer";
let balance = 10000;
console.log("{---Welcome to our ATM!---}");
do {
    let anwers = await inquirer.prompt([
        {
            message: "Enter your pin",
            type: "password",
            name: "pin",
        },
    ]);
    if (anwers.pin === "12345") {
        console.log("Access Granted!");
        let a1 = await inquirer.prompt([
            {
                message: "selected one of the following options",
                type: "list",
                name: "options1",
                choices: ["check balance", "withdraw", "deposit", "exit"]
            },
        ]);
        if (a1.options1 === "check balance") {
            console.log("your balance is =>", { balance });
        }
        else if (a1.options1 === "withdraw") {
            let b = await inquirer.prompt([
                {
                    message: "enter the amount you want to withdraw",
                    type: "number",
                    name: "amount",
                },
            ]);
            if (balance < b.amount) {
                console.log("sorry, you have insufficient funds for this withdraw");
                process.exit(0);
            }
            balance = balance - b.amount;
            console.log("your balance is =>", balance);
        }
        else if (a1.options1 === "deposit") {
            let c = await inquirer.prompt([
                {
                    message: "enter the amount you want to deposit:",
                    type: "number",
                    name: "amount",
                },
            ]);
            balance = balance + c.amount;
            console.log("your balance is =>", balance);
        }
        else if (a1.options1 === "exit") {
            console.log("Thank you for using our services,Have a nice day!");
            process.exit(0);
        }
        else {
            console.log(":( {Access Denied!}");
            console.log(anwers);
            process.exit(0);
        }
    }
    let Q = await inquirer.prompt([
        {
            message: "Do u want to do any further actions or really exit?",
            type: "list",
            name: "selections",
            choices: ["yes", "no"]
        }
    ]);
    if (Q.selections === "yes") {
        let anwers = await inquirer.prompt([
            {
                message: "Enter your pin first",
                type: "password",
                name: "pin",
            },
        ]);
        if (anwers.pin === "12345") {
            let w = await inquirer.prompt([
                {
                    message: "select one of the following options:",
                    type: "list",
                    name: "slectedOptions",
                    choices: ["check balance", "withdraw", "deposit", "exit"]
                }
            ]);
            if (w.slectedOptions === "check balance") {
                console.log("your balance is =>", balance);
                console.log("Thank you for using our services, Have a nice day!");
            }
            else if (w.slectedOptions === "withdraw") {
                let b2 = await inquirer.prompt([
                    {
                        message: "enter the amount you want to withdraw",
                        type: "number",
                        name: "amount",
                    },
                ]);
                if (balance < b2.amount) {
                    console.log("sorry, you have insufficient funds for this withdraw");
                    process.exit(0);
                }
                balance = balance - b2.amount;
                console.log("your balance is =>", balance);
                console.log("Thank you for using our services, Have a nice day!");
            }
            else if (w.slectedOptions === "deposit") {
                let c2 = await inquirer.prompt([
                    {
                        message: "enter the amount you want to deposit:",
                        type: "number",
                        name: "amount",
                    },
                ]);
                balance = balance + c2.amount;
                console.log("your balance is =>", balance);
                console.log("thanks for using our services,Have a nice day!");
            }
            else if (w.slectedOptions === "exit") {
                console.log("Thank you for using our services, Have a nice day!");
                process.exit(0);
            }
        }
    }
    if (Q.selections === "no") {
        console.log("Thank you for using our services, Have a nice day!");
        process.exit(0);
    }
} while (true);
