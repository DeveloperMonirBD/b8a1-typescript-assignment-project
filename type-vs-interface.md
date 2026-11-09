# Type vs Interface in TypeScript

## Introduction

TypeScript provides both `type` aliases and `interface` declarations to describe the shape of data. They often look similar, especially when defining object properties. However, they have different capabilities, and choosing the right one can make a codebase easier to understand and maintain.

## Detailed Explanation

An `interface` is commonly used to describe the structure that an object or class should follow. Interfaces can be extended, and declarations with the same name can be merged.

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

A `type` alias can describe object shapes too, but it can also represent unions, intersections, primitives, tuples, and function types.

```ts
type Status = "pending" | "success" | "failed";

type ApiResult = {
  data: string;
} & {
  status: Status;
};
```

Both can be used for many object-type definitions. For example, a simple `User` object can be described using either an interface or a type alias. The important difference is that interfaces support declaration merging, while type aliases do not.

```ts
interface Settings {
  theme: string;
}

// This adds another property to Settings.
interface Settings {
  language: string;
}
```

After merging, `Settings` contains both `theme` and `language`.

## Conclusion

Use `interface` when describing object contracts, especially when extension or declaration merging is useful. Use `type` when defining unions, intersections, tuples, or other more complex type expressions. Consistency within a project is also important, so follow the conventions already used by your team.

