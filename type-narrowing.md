# Type Narrowing in TypeScript

## Introduction

A union type allows a variable to hold values of more than one type. Before using a value, TypeScript needs to know which member of the union is currently present. Type narrowing is the process of reducing a broad type to a more specific type through checks in the code.

## Detailed Explanation

The `typeof` operator is useful for checking primitive values such as strings, numbers, and booleans.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }

  return value.toFixed(2);
}
```

Inside the first branch, TypeScript knows that `value` is a string. In the remaining branch, it knows that the value is a number.

The `instanceof` operator checks whether an object was created from a particular class. It is useful when working with class instances.

```ts
class Admin {
  manageUsers(): string {
    return "Managing users";
  }
}

function handleUser(user: Admin | Date): string {
  if (user instanceof Admin) {
    return user.manageUsers();
  }

  return user.toDateString();
}
```

The `in` operator checks whether a property exists on an object. This is useful for distinguishing object types that have different properties.

```ts
type EmailContact = { email: string };
type PhoneContact = { phone: string };

function contactUser(contact: EmailContact | PhoneContact): string {
  if ("email" in contact) {
    return contact.email;
  }

  return contact.phone;
}
```

## Conclusion

Type narrowing helps TypeScript safely understand which value is being handled at a particular point in a program. Use `typeof` for primitive types, `instanceof` for class instances, and `in` for checking object properties. These checks reduce unsafe assumptions and help avoid unnecessary type assertions.
