# Atomix ESLint Config

## JavaScript

1. Install the correct versions of each package, which are listed by the command:

```bash
npm info "@atomix/eslint-config" peerDependencies
```

2. Install all dependecies:

```bash
npx install-peerdeps --dev @atomix/eslint-config
```

3. Add next line to your `.eslintrc`:

```json
{
  "extends": "@atomix/eslint-config"
}
```
