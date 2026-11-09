# Assignment: Problem Solving with TypeScript & OOP

This repository contains the complete TypeScript and OOP problem-solving solutions along with technical blog posts as required by the assignment guidelines.

## Assignment overview

The `solutions.ts` file contains the implementations for the eight fully specified coding problems:

- Optional parameters and nullish coalescing
- Union types and `typeof` narrowing
- Readonly tuples
- Generic rest parameters
- Interfaces and array filtering
- Generics with `keyof`
- Classes, access modifiers, and inheritance
- Promises and asynchronous validation

## File Structure

- `solutions.ts` - Contains TypeScript problem-solving solutions for all specified coding problems.
- `type-vs-interface.md` - Technical blog post on Type Aliases vs Interfaces.
- `type-narrowing.md` - Technical blog post on Type Narrowing in TypeScript.
- `README.md` - Assignment overview and documentation.

## Blog Posts

- [Type vs Interface in TypeScript](./type-vs-interface.md)
- [Type Narrowing in TypeScript](./type-narrowing.md)

## Problems Covered

1. `multiplyValue` — Optional/default parameter, 0 handled correctly.
2. `processInput` — Union type with `typeof` narrowing.
3. `formatCoordinate` — Readonly tuple.
4. `concatenateArrays` — Generic rest parameters.
5. `Course` interface + `getPopularCourses` — Array filtering without mutation.
6. `pluckValues` — Generics with `keyof` constraint.
7. `Employee` / `Manager` — Classes, access modifiers, inheritance.
8. `validateAgeAsync` — `Promise<string>` with `setTimeout` and `Error` rejection.

## Run the solutions

Install TypeScript and `tsx`:

```bash
npm install --save-dev typescript tsx @types/node
```

Run the file:

```bash
npx tsx solutions.ts
```

## Submission
- [Public GitHub repository](https://github.com/DeveloperMonirBD/b8a1-typescript-assignment-project)

