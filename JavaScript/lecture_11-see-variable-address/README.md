## How to see variable address 
To observe the "address" or memory location associated with a variable in Chrome DevTools:

- Open the Memory Tab: Navigate to the "Memory" panel within Chrome DevTools.
- Take a Heap Snapshot: Click the "Take snapshot" button to capture the current state of the JavaScript heap. If you are interested in numerical values, ensure the "include numerical values in capture" option is selected before taking the snapshot.
- Search for the Variable's Value: Once the snapshot is generated, use the search functionality (Ctrl+F or Cmd+F) to find the value of the variable you are interested in.
- Locate the Address:
    + For String Values: The search result will likely appear within a "String" group, displaying the string value along with its associated memory address.
    + For Other Values: Click on the found value. Then, right-click and select "Reveal in summary view." This action will display the object or variable containing that value, along with its memory address.
    
This process allows for the inspection of where a variable's value resides in memory at the time the snapshot was taken.