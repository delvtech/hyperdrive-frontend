# Post Mortems on Common Bugs Found

## Format

    ## Title - Date

    ---

    ### Authors

    Name (Position) (optional additional notes or contact info)
    ---

    ### Summary

    Provide a brief overview of the incident here.
    ---

    ### Affected Components

    Description or notes about how it was affected.
    ---

    ### Resolution

    Description of the action taken.
    ---

    ### Lessons Learned

    Brief description or elaboration of the lesson.
    ---

    ### References

    - [Reference Title 1](URL1)

## Post Mortems

## Incorrect Chain Id - 07/26/2023

---

### Authors

Jack Burrus (Frontend Developer)

---

### Summary

The browser was caching the response from localhost:80 for the address.json file. Despite being on the same docker container as someone else, the Hyperdrive address returned was different.

---

### Affected Components

As a result, the useContract hooks are unable to read from the contract as it is looking at the wrong chain id. This breaks the whole app. You can usually tell when this occurs because the hyperdrive config is not logged in the console. The useAppConfig exits before it's able to return the correct config.

---

### Resolution

Clearing the browser cache reset the address.json file and the correct Hyperdrive address was returned.

---

### Lessons Learned

Starting at the root of the app and looking for the correct config information. Is the config being logged? What chain id is being logged?
