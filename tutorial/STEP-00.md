What Happened in this initial commit:

Began by running: `npx create-nx-workspace@latest --preset=angular-monorepo`
Filled in the wizard as follows (our app is called "rankle"):

```
Ok to proceed? (y) y

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Repository name                       · rankle
✔ Application name                      · rankle-fe
✔ Would you like to use Standalone Components in your application? · Yes
✔ Would you like to add routing? · Yes
✔ Default stylesheet format             · css
✔ Enable distributed caching to make your CI faster · No

 >  NX   Nx is creating your v15.9.2 workspace.

   To make sure the command works reliably in all environments, and that the preset is applied correctly,
   Nx will run "npm install" several times. Please wait.

✔ Installing dependencies with npm
✔ Nx has successfully created the workspace: rankle.
```

--

Removed the e2e app generated.

Added the Nx Console extension

```
Name: Nx Console
Id: nrwl.angular-console
Description: The UI for Nx & Lerna
Version: 18.0.2
Publisher: nrwl
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console
```

Used the Nx Console to "Add Dependency", added `@nrwl/express` and typed `latest` for the version. Chose `run @nrwl/express:init`

Used the Nx Console to "generate" and selected `@nrwl/express:application`. Kept it mostly the same, with the name `rankle-be` and removed the e2e.

--

Used the Nx Console to "generate" an `@nrwl/js:library` named `rankle-core` inside a folder called `backend`. This will be where the real application code will live.
