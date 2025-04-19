import inquirer from "inquirer";
inquirer
  .prompt([

    {message:"type in the url:",
    name:"URL"

    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    console.log(answers);
    const url = message.url;
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/* 
1. Use the inquirer npm package to get user input.



2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
