# Atomix ESLint Config

## React

1. Install the correct versions of each package, which are listed by the command:

```bash
npm info "@atomix/eslint-config-react" peerDependencies
```

2. Install all dependecies:

```bash
npx install-peerdeps --dev @atomix/eslint-config-react
```

3. Add next line to your `.eslintrc`:

```json
{
  "extends": "@atomix/eslint-config-react"
}
```
