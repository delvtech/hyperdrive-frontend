# Coding style for DELV frontend developers

## Introduction

The essence of this style guide is to address specific recurring issues in
collaborative coding and to provide clear direction on:

- **Minimizing Redundancy:** This style guide aims to eliminate repeated debates
  regarding coding conventions. It establishes mutual understanding of acceptable
  and unacceptable coding practices, particularly in areas like variable naming,
  semi-colons, brace style, etc...
- **Limiting Ambiguity:** Adhering to consistent naming and conventions
  minimizes confusion and makes it easy to work on code written by other
  developers.
- **Enhancing Team Scalability:** The guide ensures developers can easily
  navigate through the codebase and newcomers can quickly familiarize themselves
  with the coding styles and conventions.

While exceptions exist, they typically represent unique cases that necessitate
additional thought from developers.

## General guidelines

- Prioritize **readability** over brevity or performance.
  - Code is read 10x more than it's written.
  - Be explicit and verbose in naming and logic, and generously comment your
    code.
- Do not check in or leave in commented out code. Use version control to access
  historical versions.
- Avoid abbreviations (some exceptions exist, eg: LP, TVL, some others) to keep
  the codebase easier to read and search.
- Always treat acronyms and abbreviations as words when considering
  capitalization. For example:
  - Instead of `LongAPRStat`, use `LongAprStat`
  - Instead of `baseAPIURL`, use `baseApiUrl`
- If code review introduces confusion over a piece of code, add clarifying
  comments.
- Rebase to avoid merge commits in branches and PRs.
- Keep pull requests small to expedite reviews and maintain clean abstractions.
- Do a pair review for large, unsplittable PRs.
- Author, not reviewer, should squash and merge PR after it's been approved.

## Coding style

### **1. Use semi-colons**

> Enforced by Prettier

Semi-colons are required by the language and using them prevents potential
errors from automatic semicolon insertion (ASI) during code execution. They
also significantly enhance code readability, as they provide explicit statement
endings. Moreover, adhering to this standard allows for more maintainable and
consistent code, which is crucial when working in teams, fostering a unified
coding style.

### **2. Use `classNames`**

To manage dynamic class names in React, use the `classNames` utility instead of
creating bespoke, complex rules. This approach results in cleaner, more
maintainable code.

The `classNames` function accepts any number of arguments, which can be a string
or an object. It allows us to apply multiple classes, or conditional classes
based on various factors like state, props, etc. This way, we can reduce code
complexity while achieving the same results.

```typescript
import classNames from "classnames";

// Use classNames for a cleaner, more readable approach
const buttonClass = classNames("daisy-btn", {
  "daisy-btn-primary": isPrimary,
  "daisy-btn-disabled": isDisabled,
});

// Render the element
<button className={buttonClass}>Click Me</button>
```

### **3. Avoid use of `line-height`**

To promote consistency and maintainability across our codebase, avoid using
`line-height` or tailwind's `leading-*` classes directly in your components.
Directly manipulating the `line-height` property could lead to inconsistent
styling and typographic scale across different parts of the application.

Instead, use the predefined typography classes that have been generated for your
project, such as `text-h1`, `text-body`, etc. These classes are designed with a
consistent line height that aligns with our design system.

```typescript
// ❌ Instead of this
<p className="leading-normal">
  This is a text.
</p>

// ✅ Use this
<p lassName="text-body">
  This is a paragraph.
</p>
```

By following this rule, we ensure a consistent typographic hierarchy across the
application, leading to a more visually cohesive user interface.

### **4. Sentence case for labels**

Sentence case offers ease in reading and writing. In contrast, title case can
create ambiguity over which words require capitalization, and all-caps text can
drastically reduce reading speed. Therefore, it's preferable to capitalize only
the first word, for instance, 'View all' instead of 'View All'.

Note: Proper nouns should still be capitalized, e.g.: "Dai Savings Rate"

### **5. Functions should have verbs**

Function names should begin with verbs to enhance readability and express the
action they perform. This convention aids in conveying the function's purpose,
such as `calculateSum()`, `formatLabel()`, `setIsDisabled()`,
`convertInchesToFeet`, etc.

### **6. List required fields first in interfaces/object types**

When defining interfaces or object types, always list required fields first. This improves readability and ensures that the most critical information is immediately visible.

```typescript
// ❌ Instead of this
interface User {
  optionalField?: string;
  id: number;
  name: string;
}

// ✅ Use this
interface User {
  id: number;
  name: string;
  optionalField?: string;
}
```