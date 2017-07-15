# Mobile Control Panel - Web UI - Proof of Concept

This is a proof of concept for a lightweight Mobile Control Panel that gives a Mobile centric view of an OpenShift Project.

It aims to show:

* Mobile Apps (e.g. Android, iOS, Cordova)
* Mobile Services (e.g. Sync, Push)
* Mobile Enabled Services

It also aims to allow management of Mobile Apps and the Services running in the OpenShift cluster they are bound to.

## Getting Started

To run locally, you will need an OpenShift cluster. e.g.

```bash
oc cluster up
```

Then start the mcp:

```bash
npm install
npm start
```

Visit https://localhost:8001.
You may be redirected to your local OpenShift cluster (https://localhost:8443) & prompted to login. After login, you should see the MCP

--------

_This application was initialised from 'angular-seed' https://github.com/angular/angular-seed._
