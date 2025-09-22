# Dialogue boxes in javascript
JavaScript offers built-in methods to create simple, modal dialog boxes for user interaction. These dialog boxes interrupt the user's flow and require a response before the script can continue. There are three primary types:
## Alert Dialog Box
- Purpose: To display a message or warning to the user.
- Method: alert("Your message here.");
- Features: Displays a message and an "OK" button. The user must click "OK" to dismiss the dialog.

```js
    alert("This is an alert message!");
```

## Confirm Dialog Box
- Purpose: To get a "yes" or "no" confirmation from the user.
- Method: confirm("Your question here?");
- Features: Displays a message, an "OK" button, and a "Cancel" button. Returns true if the user clicks "OK" and false if they click "Cancel". 
```js
    if (confirm("Do you want to proceed?")) {
        console.log("User clicked OK.");
    } else {
        console.log("User clicked Cancel.");
    }
```

## Prompt Dialog Box
- Purpose: To get text input from the user.
- Method: prompt("Your prompt message here.", "Default value (optional)");
- Features: Displays a message, a text input field, an "OK" button, and a "Cancel" button. Returns the entered text (as a string) if the user clicks "OK", or null if they click "Cancel". 

```js
    let userName = prompt("Please enter your name:", "Guest");
    if (userName !== null) {
        console.log("Hello, " + userName + "!");
    } else {
        console.log("User cancelled the prompt.");
    }
```