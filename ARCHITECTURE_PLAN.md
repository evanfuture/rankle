# Setup Plan: Building Rankle with an Agent-Native Architecture

This repository currently contains only the basic Nx scaffolding for an Angular front end and a minimal tRPC backend. The following plan describes how to establish the missing pieces so that future features can be built on top of a well-structured, event-driven foundation. The aim is to use Convex as a reactive database, retain tRPC for typed APIs, and allow either Angular or Vue on the frontend.

## 1. Backend Setup

### 1.1 Service Decomposition
- **Domain‑Driven Design:** Identify bounded contexts such as `Ranking`, `Images`, and `User`. Each context will have its own microservice implemented in Nx.
- **Microservices:** Each service becomes its own Nx project exposing tRPC procedures. Services communicate via events rather than direct calls.
- **Database per Service:** Use Convex from the start. Each service owns its own tables, and Convex's reactive queries keep the front end in sync with event updates.

### 1.2 Event‑Driven Architecture
- Introduce a message bus (e.g., Kafka or NATS). A service publishes domain events such as `ImageRanked` or `ImageAdded`.
- Other services subscribe to these events to maintain additional read models or trigger workflows. tRPC remains for command/query APIs.

### 1.3 Hexagonal Structure
- For each service, move business logic into a "domain" folder with interfaces (ports) for persistence, events, and third‑party APIs.
- Implement adapters in an "infrastructure" layer. This makes it easy to swap the database with Convex and to test business logic in isolation.

### 1.4 Containerization and Sidecars
- Package every service in a Docker container. Add a sidecar container for logging and security so that core service code stays focused on domain behavior.
- Use docker-compose or Nx executors to orchestrate local development with the message bus and Convex.

### 1.5 Testing
- Follow a test-driven workflow. Unit tests run against the domain layer via mock ports. Integration tests spin up the containers (including Convex) to verify end‑to‑end flows.

## 2. Frontend Evolution

### 2.1 Micro‑Frontends
- Build the UI from the beginning as a set of micro-frontends (e.g., `ranking`, `image-upload`). Nx supports Angular micro-frontends out of the box.
- If the team prefers, a Vue micro-frontend can replace or coexist with Angular modules. The only restriction is to avoid React.

### 2.2 tRPC Client and Real-time Updates
- Continue using tRPC for typed API calls. Convex’s reactive queries can be consumed directly in Angular/Vue components to update rankings in real time when events occur.

### 2.3 Human-in-the-loop Views
- Add UI components for inspecting agent decisions or ranking changes. Display the history of events and allow users to approve or revert actions as suggested in the report.

## 3. Gateway and Security

- Route all external LLM or AI tool traffic through an AI Gateway for observability, prompt management, and token-based rate limiting.
- Adopt an API-first approach for all service endpoints so agents can interact consistently with tRPC procedures.

## 4. Roadmap

1. **Foundations** – Set up Convex and the message bus. Create the first microservice (e.g., ranking) with a hexagonal structure and run it in a container.
2. **Incremental Services** – Introduce new services (e.g., user profiles, image storage). Each service publishes events and exposes tRPC APIs.
3. **Frontend Modularization** – Start building the UI as micro-frontends in Angular or Vue. Consume events through Convex’s reactivity to keep the UI fresh.
4. **Operational Hardening** – Add sidecars for observability, implement the AI Gateway, and enforce test-driven CI pipelines.

Following this roadmap will let Rankle grow into an agent-native, event-driven architecture that embraces tRPC, a reactive database, and modular frontend components without adopting React.
