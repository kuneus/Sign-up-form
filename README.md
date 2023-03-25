# Sign-up-form

This is part of The Odin Project's Sign Up Form project. 

This form was made with HTML, CSS, and Javascript. Completion of this project required knowledge of forms and client-side form validation through built-in HTML validations and custom validations through Javascript. 

Features of this form: 
- highlights input fields with red border if left empty or if incorrectly filled in after focusing out of the field 
- for the passwords, displays an incorrect symbol if criteria wasn't met after leaving the input field or displays a correct symbol the moment a user meets the criteria upon releasing a key. I opted for keyup as opposed to keydown since a user could type a correct password but would not receive the correct symbol until another keystroke. With keyup, the symbol would display the moment the user releases the last key which meets the password criteria. 
- I also opted against displaying an incorrect symbol while the user types in the password as that could be too aggressive and instead chose to display an incorrect symbol when the user leaves the input field incorrectly. 
- upon focusing on the first password field, display the password criteria underneath the field